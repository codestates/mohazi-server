'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('selections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dailyCards_id: {
        type: Sequelize.INTEGER
      },
      admin: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      memo: {
        type: Sequelize.JSON
      },
      type: {
        type: Sequelize.JSON
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('selections');
  }
};