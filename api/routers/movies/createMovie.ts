import { Request, Response } from "express";
import { MysqlError } from "mysql";
import { v4 as uuid } from "uuid";
import { db } from "../../db";

const missingProperty = (name: string): {detail: string, title: string} => {
    return {
        detail: `The ${name} property is required in the POST body`,
        title: `Missing ${name} property in body`,
    };
};

/**
 * Checks if the required variables are present in the request. If so
 * then creates a new Movie in the database.
 *
 * @param {Request} req 
 * @param {Response} res 
 */
export const createMovie = (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // Check if title and year are in the request.
    const { title, year } = req.body;

    if (!title || !year) {
        res.status(200);
        res.contentType('application/json');
        const errors = [];
        if (!title) {
            errors.push(missingProperty('title'));
        }

        if(!year) {
            errors.push(missingProperty('year'));
        }

        res.send({
            errors
        });
    }

    const insertCallback = (err: MysqlError | null, results?: any): void => {
        if (err) {
            res.status(200);
            res.contentType('application/json');
            res.send({
                errors: [
                    {
                        description: err,
                        title: 'Error creating Movie',
                    }
                ]
            });

            return;
        }

        res.status(201);
        res.contentType('application/json');
        res.send({
            success: true,
        })
    };

    // Check if the given title / year combination already exists
    const dupeCallback = (err: MysqlError | null, results?: any): void => {
        if (results && results.length > 0) {
            res.status(200);
            res.contentType('application/json');
            res.send({
                errors: [
                    {
                        description: `The requested movie ${title} (${year}) already exists`,
                        title: 'Title & Year already present',
                    }
                ]
            });
            return;
        };

        const errors = [];

        if (req.body.rating) {
            if (typeof req.body.rating !== 'number') {
                errors.push({
                    detail: `Rating must be a number, received: ${typeof req.body.rating}`,
                    title: `Rating invalid type`
                });
            }

            if (typeof req.body.rating === 'number' && (req.body.rating > 5 || req.body.rating < 0)) {
                errors.push({
                    detai: `Rating must be between 0 and 5, received: ${req.body.rating}`,
                    title: `Rating out of range`
                })
            }
        }

        if (req.body.year && typeof req.body.year !== 'number') {
            errors.push({
                detail: `Year must be a number, received: ${typeof req.body.rating}`,
                title: `Year invalid type`
            });
        }

        if (errors.length > 0) {
            res.status(200);
            res.contentType('application/json');
            res.send({
                errors
            });
            return;
        }



        // Movie doesn't already exist so let's create it!
        db.query({
            sql: 'INSERT INTO movies (id, title, genre, actors, year, rating) VALUES (?, ?, ?, ?, ?, ?)',
            values: [
                uuid(),
                title,
                req.body.genre,
                req.body.actors,
                req.body.year,
                req.body.rating,
            ],
        }, insertCallback);
    };

    db.query({
        sql: 'SELECT * FROM movies WHERE title = ? AND year = ?',
        values: [title, year],
    }, dupeCallback);
};
