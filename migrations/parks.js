'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('parks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      P_PARK: {
        type: Sequelize.STRING
      },
      VISIT_ROAD: {
        type: Sequelize.STRING
      },
      P_ADMINTEL: {
        type: Sequelize.STRING
      },
      P_ADDR: {
        type: Sequelize.STRING
      },
      USE_REFER: {
        type: Sequelize.STRING
      },
      P_IMG: {
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
    await queryInterface.dropTable('parks');
  }
};