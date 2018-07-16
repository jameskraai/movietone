import { Request, Response, Router } from "express";
import { createMovie } from "./createMovie";
import { getMovies } from "./getMovies"

export const movieController: Router = Router();

movieController.get('/', getMovies);

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
