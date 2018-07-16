import bodyParser = require("body-parser");
import express = require("express");
import { movieController } from "./routers/movies";

export const app = express();
app.use(bodyParser.json());
app.use('/movies', movieController);
