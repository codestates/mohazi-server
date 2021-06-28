'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('exhibitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FAC_NAME: {
        type: Sequelize.STRING
      },
      SUBJCODE: {
        type: Sequelize.STRING
      },
      ADDR: {
        type: Sequelize.STRING
      },
      X_COORD: {
        type: Sequelize.INTEGER
      },
      Y_COORD: {
        type: Sequelize.INTEGER
      },
      PHNE: {
        type: Sequelize.STRING
      },
      CLOSEDAY: {
        type: Sequelize.STRING
      },
      FAC_DESC: {
        type: Sequelize.STRING
      },
      ENTRFREE: {
        type: Sequelize.BOOLEAN
      },
      SUBWAY: {
        type: Sequelize.STRING
      },
      BUSSTOP: {
        type: Sequelize.STRING
      },
      MAIN_IMG: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('exhibitions');
  }
};