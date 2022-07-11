import express, {Application} from 'express'
import bodyParser from 'body-parser'
import routes from './routes/index'
import dotenv from 'dotenv'
import connectDB from './db/connect'
import path from 'path'


dotenv.config();
const app: Application = express();

const port = process.env.PORT || 8080;
app.listen(port, async () =>{
    console.log(`Server running on port ${port}`);
    await connectDB();
});

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

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
  
    


