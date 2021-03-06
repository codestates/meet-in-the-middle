'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.address.belongsTo(models.user, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
    }
  };
  address.init({
    addressName: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};