import express = require("express");
import { movieController } from "./controllers/movie.controller";

export const app = express();
app.use('/movies', movieController);
