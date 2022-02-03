'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Receitas', 'nomeUsuario', {
        allowNull: false,
        type: Sequelize.STRING
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Receitas', 'nomeUsuario');
  }
};