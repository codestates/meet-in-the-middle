'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.belongsToMany(models.friend, { // N:M
        through: 'user_friend',
        as: 'friend',
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      }),
      models.user.belongsToMany(models.meet, { // N:M
        through: 'user_meet',
        as: 'meet',
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      }),
      models.user.hasMany(models.address, { // 1:N
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
    }
  };
  user.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userName: DataTypes.STRING,
    nickName: DataTypes.STRING,
    birth: DataTypes.STRING,
    phone: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};