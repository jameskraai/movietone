import bodyParser = require("body-parser");
import cors = require("cors");
import express = require("express");
import { movieController } from "./routers/movies";

export const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/movies', movieController);