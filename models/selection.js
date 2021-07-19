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
    admin: DataTypes.INTEGER,
    date: DataTypes.STRING,
    photo: DataTypes.JSON,
    memo: DataTypes.STRING,
    type: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'selection',
  });
  return selection;
};