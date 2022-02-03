'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Despesas', 'senhaUsuario', {
        allowNull: false,
        type: Sequelize.STRING
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Despesas', 'senhaUsuario');
  }
};