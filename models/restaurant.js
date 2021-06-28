'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  restaurant.init({
    BPLCNM: DataTypes.STRING,
    DTLSTATENM: DataTypes.STRING,
    SITETEL: DataTypes.STRING,
    RDNWHLADDR: DataTypes.STRING,
    RDNPOSTNO: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'restaurant',
  });
  return restaurant;
};