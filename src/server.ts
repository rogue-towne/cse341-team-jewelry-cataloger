import express, {Application, NextFunction, Request, Response} from 'express'
require('dotenv').config({path: './.env'})
import connectDB from './db/connect'

const app: Application = express();



const port = process.env.PORT || 8080;
app.listen(port, async () =>{
    console.log(`Server running on port ${port}`);
    await connectDB();
});

app.use('/', require('routes'))


