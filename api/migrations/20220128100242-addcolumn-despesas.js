'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Receitas', {
      categorias: {
        allowNull: true,
        type: Sequelize.ENUM({
          values: ['Alimentação', 'Saúde', 'Moradia', 'Transporte', 'Educação', 'Lazer', 'Imprevistos', 'Outras']
        }),
        defaultValue: 'Outras'
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Receitas', 'deletedAT');
  }
};