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
    FAC_NAME: DataTypes.STRING,
    SUBJCODE: DataTypes.STRING,
    ADDR: DataTypes.STRING,
    X_COORD: DataTypes.INTEGER,
    Y_COORD: DataTypes.INTEGER,
    PHNE: DataTypes.STRING,
    CLOSEDAY: DataTypes.STRING,
    FAC_DESC: DataTypes.STRING,
    ENTRFREE: DataTypes.BOOLEAN,
    SUBWAY: DataTypes.STRING,
    BUSSTOP: DataTypes.STRING,
    MAIN_IMG: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'exhibition',
  });
  return exhibition;
};