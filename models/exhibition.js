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
    address_name: DataTypes.STRING,
    category_group_code: DataTypes.STRING,
    category_group_name: DataTypes.STRING,
    category_name: DataTypes.STRING,
    distance: DataTypes.STRING,
    phone: DataTypes.STRING,
    place_name: DataTypes.STRING,
    place_url: DataTypes.STRING,
    road_address_name: DataTypes.STRING,
    x: DataTypes.STRING,
    y: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'exhibition',
  });
  return exhibition;
};