import express, {Application} from 'express'
import bodyParser from 'body-parser'
import routes from './routes/index'
import dotenv from 'dotenv'
import connectDB from './db/connect'
import path from 'path'
import swaggerJSON from './swagger.json'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import passport from 'passport'
import session from 'express-session'
import MongoStore from 'connect-mongo'
const swaggerDefinition = swaggerJSON;

// Passport config
require('./config/passport')(passport);

dotenv.config();
const app: Application = express();

const port = process.env.PORT || 8080;
app.listen(port, async () =>{
    console.log(`Server running on port ${port}`);
    await connectDB();
});

// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_DB_URI }),
    cookie: { maxAge: 1 * 24 * 60 * 60 * 1000 }
}));

// Passport middleware
app
  .use(passport.initialize())
  .use(passport.session());


// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

const options = {
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/*.ts'],
    swaggerDefinition
};

// App
app
    .use(bodyParser.json())
    // .use((req, res, next) => {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     res.setHeader(
    //         'Access-Control-Allow-Headers',
    //         'Origin, E-Requested-With, Content-Type, Accept, Z-Key'
    //     );
    //     // Need to comment out below to make ejs template work
    //     // res.setHeader('Content-Type', 'application/json');
    //     res.setHeader(
    //         'Access-Control-Allow-Methods',
    //         'GET, POST, PUT, DELETE, OPTIONS'
    //     );
    //     next();
    // })
    .use('/', routes)
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)))
  

