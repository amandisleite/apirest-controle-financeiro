module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Receitas', 
    [
      {
        descricao: "farmácia",
        valor: 9.08,
        data: "2021-03-02",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 81.58,
        data: "2021-01-27",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 81.2,
        data: "2020-12-22",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 48.69,
        data: "2021-09-02",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 8.94,
        data: "2020-09-02",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 52.55,
        data: "2020-11-11",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "mercado",
        valor: 49.99,
        data: "2020-11-02",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 69.86,
        data: "2021-12-30",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 68.89,
        data: "2021-03-22",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "mercado",
        valor: 59.29,
        data: "2021-07-05",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Receitas', null, {})
  }
}
