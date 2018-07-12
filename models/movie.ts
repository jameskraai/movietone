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
        id: DataTypes.STRING
    });

    Movie.associate = function(models) {
        // associations can be defined here
    };

    return Movie;
};
