import { DataTypes, Models, Sequelize } from 'sequelize';

export interface MovieAttributes {
    id? : string;
}

export interface MovieInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

}

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
    const Movie = sequelize.define('Movie', {
        actors: dataTypes.STRING,
        genre: dataTypes.STRING,
        id: dataTypes.STRING,
        rating: dataTypes.INTEGER,
        title: dataTypes.STRING,
        year: dataTypes.INTEGER,
    });

    Movie.associate = (models: Models) => {
        // associations can be defined here
    };

    return Movie;
};
