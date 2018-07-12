import { Sequelize, DataTypes } from 'sequelize';

export interface MovieAttributes {
    id ? : string;
}

export interface MovieInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

}

export default (sequelize: Sequelize, DataTypes: DataTypes) => {
    const Movie = sequelize.define('Movie', {
        id: DataTypes.STRING,
        title: DataTypes.STRING,
        genre: DataTypes.STRING,
        actors: DataTypes.STRING,
        year: DataTypes.INTEGER,
        rating: DataTypes.INTEGER
    });

    Movie.associate = function(models) {
        // associations can be defined here
    };

    return Movie;
};
