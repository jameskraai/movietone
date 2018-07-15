import { Request, Response, Router } from "express";
import {   MysqlError, QueryOptions } from "mysql";
import { v4 as uuid } from "uuid";
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

movieController.post('/:movieId', (req: Request, res: Response) => {
    db.connect();

    // Check if there are any movies for the given title / year, if so
    // return an error.
    const options: QueryOptions = {
        sql: 'SELECT * FROM movies WHERE title = ? AND year = ?',
        values: [req.body.title, req.body.year]
    };

    const insertCallback = (err: MysqlError | null, results?: any) => {
        if (err) {
            res.status(200);
            res.contentType('application/json');
            res.send({
                errors: [
                    {
                        message: err
                    }
                ],
                success: false,
            });
        }
        if (results) {
            res.status(200);
            res.contentType('application/json');
            res.send({

            })
        }
    };

    const callback = (err: MysqlError | null, results?: any): void => {
        if (results.length === 0) {
            // insert the row
            db.query({
                sql: 'INSERT INTO movies (id, title, genre, actors, year, rating) VALUES (?, ?, ?, ?, ?, ?)',
                values: [
                    uuid(),
                    req.body.title,
                    req.body.genre,
                    req.body.actors,
                    req.body.year,
                    req.body.rating,
                ]
            }, insertCallback);
        }
    };

    db.query(options, callback);
});

movieController.patch('/:movieId', () => {
    //
});

movieController.delete(':movieId', () => {
    //
});
