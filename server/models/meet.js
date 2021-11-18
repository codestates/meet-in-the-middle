'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.meet.belongsToMany(models.user, {
        through: 'user_meet',
        as: 'user',
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
    }
  };
  meet.init({
    nickName: DataTypes.STRING,
    when: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'meet',
  });
  return meet;
};