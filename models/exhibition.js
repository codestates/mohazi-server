'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class exhibition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  exhibition.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    address: DataTypes.STRING,
    locationX: DataTypes.INTEGER,
    locationY: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    runtime: DataTypes.STRING,
    description: DataTypes.STRING,
    fee: DataTypes.BOOLEAN,
    subway: DataTypes.STRING,
    bus: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'exhibition',
  });
  return exhibition;
};