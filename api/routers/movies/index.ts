import { Request, Response, Router } from "express";
import {   MysqlError, QueryOptions } from "mysql";
import { v4 as uuid } from "uuid";
import { createMovie } from "./createMovie";

export const movieController: Router = Router();

movieController.get('/', (req: Request, res: Response) => {
    res.send('hello again');
});

movieController.get('/:movieId', () => {
    //
});

movieController.post('/:movieId', createMovie);

movieController.patch('/:movieId', () => {
    //
});

movieController.delete(':movieId', () => {
    //
});
