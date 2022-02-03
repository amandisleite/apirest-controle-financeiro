'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Despesas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Despesas.init({
    descricao: {
      type: DataTypes.STRING,
      validate: {
        len: [2,20]
      }
    },
    valor: {
      type: DataTypes.FLOAT,
      validate: {
        len: [2,7]
      }
    },
    data: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: {
          args: true,
          msg: 'data inválida'
        }
      },
    },
    categorias: {
      type: DataTypes.ENUM,
      values: ['Alimentação', 'Saúde', 'Moradia', 'Transporte', 'Educação', 'Lazer', 'Imprevistos', 'Outras'],
      validate: {
        len: [2,15]
      }
    },
    nomeUsuario: {
      type: DataTypes.STRING,
      validate: {
        len: [2,30]
      }
    },
    emailUsuario: {
      type: DataTypes.STRING,
      validate: {
        len: [2,30],
        isEmail: {
          args: true,
          msg: 'e-mail inválido'
        }
      }
    },
    senhaUsuario: {
      type: DataTypes.STRING,
      validate: {
        len: [2,20]
      }
    }
  }, {
    sequelize,
    modelName: 'Despesas',
    paranoid: true
  });
  return Despesas;
};