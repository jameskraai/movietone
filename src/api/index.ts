import axios from "axios";

export interface IApiError {
    title: string;
    description: string;
}

export interface IResource<T> {
    type: string;
    id: string;
    attributes: T
}

export interface IResponse<T> {
    errors?: IApiError[],
    data?: Array<IResource<T>>,
}

export const api = axios.create({
    baseURL: `http://localhost:3001`
});