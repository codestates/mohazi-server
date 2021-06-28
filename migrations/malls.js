'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('malls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BPLCNM: {
        type: Sequelize.STRING
      },
      DTLSTATENM: {
        type: Sequelize.STRING
      },
      SITETEL: {
        type: Sequelize.STRING
      },
      RDNWHLADDR: {
        type: Sequelize.STRING
      },
      RDNPOSTNO: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UPTAENM: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('malls');
  }
};