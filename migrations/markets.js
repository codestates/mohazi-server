'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('markets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address_name: {
        type: Sequelize.STRING
      },
      category_group_code: {
        type: Sequelize.STRING
      },
      category_group_name: {
        type: Sequelize.STRING
      },
      category_name: {
        type: Sequelize.STRING
      },
      distance: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      place_name: {
        type: Sequelize.STRING
      },
      place_url: {
        type: Sequelize.STRING
      },
      road_address_name: {
        type: Sequelize.STRING
      },
      x: {
        type: Sequelize.STRING
      },
      y: {
        type: Sequelize.STRING
      },
      memo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('markets');
  }
};