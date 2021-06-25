'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mall extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mall.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    address_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mall',
  });
  return mall;
};