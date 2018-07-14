import { Request, Response, Router } from "express";
import { db } from "../db";

export const movieController: Router = Router();

movieController.get('/', (req: Request, res: Response) => {
    db.connect();
    db.end();
    res.send('hello again');
});

movieController.get('/:movieId', () => {
    //
});

movieController.patch('/:movieId', () => {
    //
});

movieController.delete(':movieId', () => {
    //
});
