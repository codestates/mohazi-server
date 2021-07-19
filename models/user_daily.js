'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_daily extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_daily.init({
    user_id: DataTypes.INTEGER,
    dailyCards_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_daily',
  });
  return user_daily;
};