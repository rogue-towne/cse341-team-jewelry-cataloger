import { ObjectId } from 'mongodb';
import {NextFunction, Request, Response} from 'express'
import UserDataModel from '../models/User_Data';
import find from '../models/User_Data';


const getAll = async (req: Request, res: Response, next: NextFunction) => {
	/*
    #swagger.description =  Get all Users in the database
    #swagger.tags = ['user']
  */
	try {
		const result = await UserDataModel.find();
		res.setHeader('Content-Type', 'application/json');
		res.status(200).json(result);
	} catch (err) {
		//const errors = handleErrors(err);
		//res.status(500).json({ errors });
		res.status(401);
	}
};
export default getAll;