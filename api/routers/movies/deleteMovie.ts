import { Request, Response } from "express";
import { MysqlError } from "mysql";
import { db } from "../../db";
import { IMovie } from "../../db/DataTypes";

export const deleteMovie = (req: Request, res: Response) => {
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
            // Movie exists so we can delete is
            db.query({
                sql: "DELETE FROM movies WHERE id = ?",
                values: [req.params.movieId]
            }, (err: MysqlError | null, results?: any) => { //tslint:disable-line
                if (err) {
                    res.send({
                        errors: [
                            {
                                description: err,
                                title: "Error deleting Movie",
                            }
                        ]
                    });
                    return;
                }

                res.send(results);
                return;
            });
            return;
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
