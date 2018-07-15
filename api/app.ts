import bodyParser = require("body-parser");
import express = require("express");
import { movieController } from "./controllers/movie.controller";

export const app = express();

app.use(bodyParser.raw({
    type: 'application/vnd.api+json',
}));

app.use('/movies', movieController);
