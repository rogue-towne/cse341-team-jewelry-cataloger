import express, {Application, NextFunction, Request, Response} from 'express'

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
    .use(express.json())
    .use('/', routes)


