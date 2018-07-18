import { Request, Response } from "express";
import { MysqlError } from "mysql";
import { db } from "../../db";
import { IMovie } from "../../db/DataTypes";

export const getMovie = (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    db.query({
        sql: "SELECT * FROM movies WHERE id = ?",
        values: [req.params.movieId]
    }, (err: MysqlError | null, results: IMovie[]) => {
        res.status(200);
        res.contentType('application/json');

        if (err) {
            res.send({
                errors: [
                    {
                        description: err,
                        title: "Error getting Movie",
                    }
                ]
            });
            return;
        }

        if (results.length > 0) {
            return res.send({
                data: {
                    attributes: {
                        actors: results[0].actors,
                        createdAt: results[0].createdAt,
                        genre: results[0].genre,
                        rating: results[0].rating,
                        title: results[0].title,
                        updated: results[0].updated,
                        year: results[0].year,
                    },
                    id: results[0].id,
                    type: "movies"
                }
            });
        }

        res.send({
            errors: [
                {
                    description: `No Movies found for the given id: ${req.params.movieId}`,
                    title: "No Movie Found",
                }
            ]
        });
    });
};
