
export const getMovies = async () => {
    const res: Response = await fetch('http://localhost:3001/movies');
    return res;
};