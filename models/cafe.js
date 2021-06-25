'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cafe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cafe.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    status: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    address_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cafe',
  });
  return cafe;
};