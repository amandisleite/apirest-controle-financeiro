module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Despesas', 
      [{
        descricao: "jogos",
        valor: 44.17,
        data: "2021-04-30",
        categorias: "Outras",
        createdAt: new Date(),
				updatedAt: new Date()
      }, {
        descricao: "farmácia",
        valor: 63.91,
        data: "2021-08-23",
        categorias: "Outras",
        createdAt: new Date(),
				updatedAt: new Date()
      }, {
        descricao: "salário",
        valor: 50.79,
        data: "2020-08-20",
        categorias: "Imprevistos",
        createdAt: new Date(),
				updatedAt: new Date()
      }, {
        descricao: "compras",
        valor: 51.87,
        data: "2020-12-29",
        categorias: "Alimentação",
        createdAt: new Date(),
				updatedAt: new Date()
      }, {
        descricao: "mercado",
        valor: 45.71,
        data: "2021-05-20",
        categorias: "Transporte",
        createdAt: new Date(),
				updatedAt: new Date()
      }, {
        descricao: "shopping",
        valor: 56.21,
        data: "2021-09-04",
        categorias: "Outras",
        createdAt: new Date(),
				updatedAt: new Date()
      }, {
        descricao: "farmácia",
        valor: 21.35,
        data: "2021-12-06",
        categorias: "Transporte",
        createdAt: new Date(),
				updatedAt: new Date()
      }, {
        descricao: "jogos",
        valor: 20.75,
        data: "2021-09-14",
        categorias: "Lazer",
        createdAt: new Date(),
				updatedAt: new Date()
      }, {
        descricao: "farmácia",
        valor: 15.73,
        data: "2020-10-27",
        categorias: "Transporte",
        createdAt: new Date(),
				updatedAt: new Date()
      }, {
        descricao: "farmácia",
        valor: 68.0,
        data: "2021-08-25",
        categorias: "Alimentação",
        createdAt: new Date(),
				updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Despesas', null, {})
  }
}
