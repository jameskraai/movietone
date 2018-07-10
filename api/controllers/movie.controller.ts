import { Request, Response, Router } from "express";

export const movieController: Router = Router();

movieController.get('/', (req: Request, res: Response) => {
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
