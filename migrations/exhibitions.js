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
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      locationX: {
        type: Sequelize.INTEGER
      },
      locationY: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.STRING
      },
      runtime: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      fee: {
        type: Sequelize.BOOLEAN
      },
      subway: {
        type: Sequelize.STRING
      },
      bus: {
        type: Sequelize.STRING
      },
      img: {
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