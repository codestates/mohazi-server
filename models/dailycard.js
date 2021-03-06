'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dailyCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dailyCard.init({
    admin: DataTypes.INTEGER,
    photo: DataTypes.JSON,
    date: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'dailyCard',
  });
  return dailyCard;
};