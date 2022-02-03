'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Despesas', 'emailUsuario', {
        allowNull: false,
        type: Sequelize.STRING
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Despesas', 'emailUsuario');
  }
};