'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.friend.belongsToMany(models.user, {
        through: 'user_friend',
        as: 'user',
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
    }
  };
  friend.init({
    nickName: DataTypes.STRING,
    image: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'friend',
  });
  return friend;
};