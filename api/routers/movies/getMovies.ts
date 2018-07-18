import { Request, Response } from "express";
import { MysqlError } from "mysql";
import { db } from "../../db";
import { IMovie } from "../../db/DataTypes";

class Builder {
    private query: string = "";
    private values: any[] = [];

    public addWhere(field: string, value: any) {
        this.query += this.query === "" ? ` WHERE ${field} = ?` : ` AND ${field} = ?`;
        this.values.push(value);
    }

    public getQuery(): string {
            return "SELECT * FROM movies" + this.query;
    }

    public getValues(): any[] {
        return this.values;
    }
}

/**
 * Retrieves a filterable, paginated list of Movies.
 *
 * Filterable properties:
 * - title
 * - genre
 * - actors
 * - year
 * - rating
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export const getMovies = (req: Request, res: Response) => {
    const builder = new Builder();
    if (req.query.title) {
        builder.addWhere('title', req.query.title);
    }

    if (req.query.genre) {
        builder.addWhere('genre', req.query.genre);
    }

    if (req.query.actors) {
        builder.addWhere('actors', req.query.actors);
    }

    if (req.query.rating) {
        builder.addWhere('rating', req.query.rating);
    }

    if (req.query.year) {
        builder.addWhere('year', req.query.year);
    }


    db.query({
        sql: builder.getQuery(),
        values: builder.getValues(),
    }, (err: MysqlError | null, results?: any) => {
        res.status(200);
        res.contentType('application/json');
        if (err) {
            res.send({
                errors: [
                    {
                        description: err,
                        title: "Error getting Movies",
                    }
                ]
            });

            return;
        }

        const data: any = [];

        if (results.length) {
            results.forEach((movie: IMovie) => {
                data.push({
                    attributes: {
                        actors: movie.actors,
                        createdAt: movie.createdAt,
                        genre: movie.genre,
                        rating: movie.rating,
                        title: movie.title,
                        updated: movie.updated,
                        year: movie.year,
                    },
                    id: movie.id,
                    type: "movies",
                });
            });
        }


        res.send({
            data
        });
    });
};
