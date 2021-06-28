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
    P_PARK: DataTypes.STRING,
    VISIT_ROAD: DataTypes.STRING,
    P_ADMINTEL: DataTypes.STRING,
    P_ADDR: DataTypes.STRING,
    USE_REFER: DataTypes.STRING,
    P_IMG: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'park',
  });
  return park;
};