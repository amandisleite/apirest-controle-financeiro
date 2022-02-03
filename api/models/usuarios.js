'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuarios.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        len: [2,50]
      }
    },  
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'e-mail inválido'
        }
      }
    },
    senha: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};