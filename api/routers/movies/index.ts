import { Request, Response, Router } from "express";
import { createMovie } from "./createMovie";
import { deleteMovie } from "./deleteMovie";
import { getMovie } from "./getMovie";
import { getMovies } from "./getMovies"
import { patchMovie } from "./patchMovie";

export const movieController: Router = Router();

movieController.get('/', getMovies);

movieController.get('/:movieId', getMovie);

movieController.post('/:movieId', createMovie);

movieController.patch('/:movieId', patchMovie);

movieController.delete('/:movieId', deleteMovie);