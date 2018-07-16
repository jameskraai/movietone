import { Request, Response } from "express";
import { MysqlError } from "mysql";
import { db } from "../../db";
import { IMovie } from "../../db/DataTypes";

class PatchBuilder {
    private query: string = "";
    private values: any = [];


}

interface ISetClause {
    column: string;
    value: any;
}

export const patchMovie = (req: Request, res: Response) => {
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
            const query: string[] = [];
            const values: any[] = [];
            // Found Movie, now let's update it with the params we have
            if (req.body.title) {
                query.push('title = ?')
                values.push(req.body.title);
            }
            if (req.body.actors) {
                query.push('actors = ?')
                values.push(req.body.actors);
            }
            if (req.body.genre) {
                query.push('genre = ?')
                values.push(req.body.genre);
            }
            if (req.body.rating) {
                query.push('rating = ?')
                values.push(req.body.rating);
            }
            if (req.body.year) {
                query.push('year = ?')
                values.push(req.body.year);
            }

            if (query.length > 0) {
                values.push(req.params.movieId);
                db.query({
                    sql: `UPDATE movies SET ${query.join(", ")} WHERE id = ?`,
                    values,
                }, (err: MysqlError | null, results?: any) => { // tslint:disable-line
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

                    res.send(results);
                    return;
                });
            }

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
