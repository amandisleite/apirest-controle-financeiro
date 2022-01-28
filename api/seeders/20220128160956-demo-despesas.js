module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Despesas', 
    [
      {
        descricao: "shopping",
        valor: 29.54,
        data: "2021-06-27",
        categorias: "Saúde",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 13.86,
        data: "2021-05-12",
        categorias: "Imprevistos",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "mercado",
        valor: 49.15,
        data: "2020-08-16",
        categorias: "Lazer",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 3.28,
        data: "2020-08-31",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 79.13,
        data: "2021-08-12",
        categorias: "Moradia",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 10.33,
        data: "2021-07-12",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 42.53,
        data: "2021-07-12",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 89.13,
        data: "2020-07-21",
        categorias: "Moradia",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 1.53,
        data: "2020-11-28",
        categorias: "Transporte",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 31.14,
        data: "2020-08-19",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 17.93,
        data: "2021-11-23",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 2.31,
        data: "2021-10-13",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 5.61,
        data: "2020-07-26",
        categorias: "Imprevistos",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "mercado",
        valor: 23.6,
        data: "2020-11-23",
        categorias: "Saúde",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 88.22,
        data: "2021-09-06",
        categorias: "Transporte",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 85.26,
        data: "2020-11-24",
        categorias: "Outras",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 11.27,
        data: "2021-01-23",
        categorias: "Saúde",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 48.4,
        data: "2021-10-09",
        categorias: "Lazer",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "mercado",
        valor: 66.55,
        data: "2021-12-28",
        categorias: "Transporte",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 66.35,
        data: "2020-11-20",
        categorias: "Moradia",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 30.18,
        data: "2021-03-26",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "mercado",
        valor: 48.32,
        data: "2021-05-18",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 5.04,
        data: "2021-10-27",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 60.68,
        data: "2021-02-26",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 22.62,
        data: "2021-08-08",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 67.11,
        data: "2021-12-21",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 71.44,
        data: "2021-07-25",
        categorias: "Saúde",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 34.12,
        data: "2020-09-11",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 98.76,
        data: "2021-01-22",
        categorias: "Imprevistos",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 56.76,
        data: "2021-08-14",
        categorias: "Transporte",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 58.45,
        data: "2020-09-06",
        categorias: "Outras",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 91.62,
        data: "2020-12-27",
        categorias: "Lazer",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 84.38,
        data: "2021-12-02",
        categorias: "Saúde",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 94.65,
        data: "2020-12-09",
        categorias: "Moradia",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 10.63,
        data: "2020-11-21",
        categorias: "Imprevistos",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 58.05,
        data: "2020-10-22",
        categorias: "Outras",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 34.97,
        data: "2020-10-27",
        categorias: "Imprevistos",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 7.9,
        data: "2021-06-10",
        categorias: "Imprevistos",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 44.78,
        data: "2020-08-27",
        categorias: "Transporte",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 19.77,
        data: "2021-05-03",
        categorias: "Saúde",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 27.81,
        data: "2021-02-08",
        categorias: "Saúde",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 19.4,
        data: "2021-12-23",
        categorias: "Saúde",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 39.7,
        data: "2022-01-11",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 98.56,
        data: "2020-10-09",
        categorias: "Saúde",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 14.92,
        data: "2021-11-25",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 80.64,
        data: "2020-11-23",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 47.58,
        data: "2021-05-19",
        categorias: "Outras",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 70.82,
        data: "2021-09-23",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 6.22,
        data: "2021-02-07",
        categorias: "Moradia",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 51.9,
        data: "2020-10-21",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 42.64,
        data: "2020-10-17",
        categorias: "Saúde",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 2.47,
        data: "2021-01-04",
        categorias: "Imprevistos",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 76.48,
        data: "2020-08-25",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 9,
        data: "2020-08-15",
        categorias: "Saúde",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 10.6,
        data: "2021-11-21",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "salário",
        valor: 95.31,
        data: "2021-01-04",
        categorias: "Moradia",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 64.17,
        data: "2021-11-08",
        categorias: "Transporte",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 56.13,
        data: "2020-10-27",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 91.06,
        data: "2021-11-06",
        categorias: "Lazer",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 63.16,
        data: "2022-01-18",
        categorias: "Lazer",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 56.12,
        data: "2021-04-16",
        categorias: "Outras",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "mercado",
        valor: 30.77,
        data: "2021-11-28",
        categorias: "Transporte",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 41.13,
        data: "2022-01-02",
        categorias: "Imprevistos",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "mercado",
        valor: 52.55,
        data: "2020-08-30",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 31.01,
        data: "2020-08-28",
        categorias: "Moradia",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "mercado",
        valor: 23.64,
        data: "2020-11-22",
        categorias: "Imprevistos",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "mercado",
        valor: 80.88,
        data: "2021-01-16",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "salário",
        valor: 71.36,
        data: "2021-10-17",
        categorias: "Lazer",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 87.6,
        data: "2021-02-04",
        categorias: "Moradia",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "salário",
        valor: 73.75,
        data: "2022-01-01",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 23.92,
        data: "2022-01-22",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 79.52,
        data: "2021-11-13",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 73.27,
        data: "2020-07-16",
        categorias: "Lazer",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 93.3,
        data: "2021-06-01",
        categorias: "Transporte",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "salário",
        valor: 75.95,
        data: "2021-12-26",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "salário",
        valor: 17.27,
        data: "2021-05-11",
        categorias: "Lazer",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "salário",
        valor: 25.13,
        data: "2022-01-20",
        categorias: "Imprevistos",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "mercado",
        valor: 23.85,
        data: "2020-09-17",
        categorias: "Saúde",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 41.69,
        data: "2021-04-09",
        categorias: "Moradia",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 21.8,
        data: "2020-11-02",
        categorias: "Transporte",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 33.73,
        data: "2021-06-29",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 30.03,
        data: "2020-12-07",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "salário",
        valor: 44.84,
        data: "2021-07-23",
        categorias: "Outras",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 3.91,
        data: "2020-11-18",
        categorias: "Outras",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "salário",
        valor: 53.15,
        data: "2021-03-21",
        categorias: "Moradia",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "compras",
        valor: 72.1,
        data: "2021-07-13",
        categorias: "Transporte",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 47.96,
        data: "2021-12-26",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 93.32,
        data: "2020-08-12",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "salário",
        valor: 39.91,
        data: "2020-07-23",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 49.86,
        data: "2020-08-18",
        categorias: "Educação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "mercado",
        valor: 76.19,
        data: "2021-08-11",
        categorias: "Imprevistos",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "jogos",
        valor: 32.13,
        data: "2020-07-20",
        categorias: "Moradia",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 66.67,
        data: "2020-07-08",
        categorias: "Lazer",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 50.99,
        data: "2021-07-30",
        categorias: "Moradia",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 2.04,
        data: "2020-12-23",
        categorias: "Imprevistos",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 13.39,
        data: "2020-08-23",
        categorias: "Alimentação",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 24.9,
        data: "2020-08-17",
        categorias: "Transporte",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "farmácia",
        valor: 6.76,
        data: "2020-10-13",
        categorias: "Saúde",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "mercado",
        valor: 59.12,
        data: "2021-01-18",
        categorias: "Imprevistos",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      },
      {
        descricao: "shopping",
        valor: 89.93,
        data: "2021-09-07",
        categorias: "Transporte",
        createdAt: "2022-01-28",
        updatedAt: "2022-01-28"
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Despesas', null, {})
  }
}
