import {Request, Response} from 'express'
const express = require('express')
const router = express.Router()
router.get('/', (req: Request, res: Response) => {
    res.send('This is the Recipe Book home page!');
});

module.exports = router;