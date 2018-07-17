import { List, Map } from "immutable";

export interface IMovie {
    id?: string;
    title: string;
    genre?: string;
    actors?: string;
    year: number;
    rating?: number;
    createdAt: string;
    updated: string;
}

export type MovieMap = Map<string, string | number>;
export type MovieList = List<MovieMap>;

