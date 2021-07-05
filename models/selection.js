'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class selection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  selection.init({
    dailyCards_id: DataTypes.INTEGER,
    memo: DataTypes.STRING,
    type: DataTypes.JSON,
    type_id: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'selection',
  });
  return selection;
};