'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Receitas', 'senhaUsuario', {
        allowNull: false,
        type: Sequelize.STRING
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Receitas', 'senhaUsuario');
  }
};