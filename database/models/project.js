'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsTo(models.User, {as: 'user'});
    }
  }
  Project.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    manager: DataTypes.STRING,
    asignedTo: DataTypes.STRING,
    status: DataTypes.STRING,    
    userId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};