import bodyParser = require("body-parser");
import express = require("express");
import { movieController } from "./routers/movies";

export const app = express();
app.use(bodyParser.json());
app.use('/movies', movieController);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});