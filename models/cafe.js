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
    BPLCNM: DataTypes.STRING,
    DTLSTATENM: DataTypes.STRING,
    SITETEL: DataTypes.STRING,
    RDNWHLADDR: DataTypes.STRING,
    RDNPOSTNO: DataTypes.INTEGER,
    UPTAENM: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cafe',
  });
  return cafe;
};