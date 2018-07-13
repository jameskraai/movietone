"use strict";
exports.__esModule = true;
exports["default"] = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Movies', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING
            },
            genre: {
                allowNull: true,
                type: Sequelize.STRING
            },
            actors: {
                allowNull: true,
                type: Sequelize.STRING
            },
            year: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            rating: {
                allowNull: false,
                type: Sequelize.INTEGER
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
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Movies');
    }
};
