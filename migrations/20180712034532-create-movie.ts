import { QueryInterface, SequelizeStatic } from 'sequelize';

export default {
    up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
        return queryInterface.createTable('Movies', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            genre: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            actors: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            year: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            rating: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
        return queryInterface.dropTable('Movies');
    }
};
