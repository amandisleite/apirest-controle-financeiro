'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Despesas', 'nomeUsuario', {
        allowNull: false,
        type: Sequelize.STRING
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Despesas', 'nomeUsuario');
  }
};