'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class park extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  park.init({
    name: DataTypes.STRING,
    way: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    refer: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'park',
  });
  return park;
};