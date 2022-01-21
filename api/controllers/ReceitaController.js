const database = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");
const sequelize = require("sequelize");

class Receitas {
    static async cadastroDeReceita(req, res) {
        const novaReceita = req.body;
        const dataNovaReceita = req.body.data;

        const descricaoNovaReceita = req.body.descricao;
        let mesNovaReceita = (moment(dataNovaReceita).month()) + 1;
        let anoNovaReceita = moment(dataNovaReceita).year();

        let anoTodasReceitas = await database.Receitas.findAll({attributes: [[ sequelize.fn('YEAR', sequelize.col('data')), 'ano']] })
        let mesTodasReceitas = await database.Receitas.findAll({attributes: [[ sequelize.fn('MONTH', sequelize.col('data')), 'mes']] })
        
        let arrayComTodosMeses = [];
        let arrayComTodosAnos = [];

        for (let i = 0; i < mesTodasReceitas.length; i++) {
            let mes = Object.values(mesTodasReceitas[i].dataValues)
            arrayComTodosMeses.push(Number(mes))
        }

        for (let i = 0; i < anoTodasReceitas.length; i++) {
            let ano = Object.values(anoTodasReceitas[i].dataValues)
            arrayComTodosAnos.push(Number(ano))
        }

        let mesmoAnoDaRequisicao = arrayComTodosAnos.filter((a, ano) => arrayComTodosAnos[ano] === anoNovaReceita)
        let mesmoMesDaRequisicao = arrayComTodosMeses.filter((a, mes) => arrayComTodosMeses[mes] === mesNovaReceita)

        try {
            const descricaoEmTodasReceitas = await database.Receitas.findAll({
                where: {
                    descricao: descricaoNovaReceita,
                }
            });

            if (descricaoEmTodasReceitas &&
                mesmoAnoDaRequisicao.length > 0 &&
                mesmoMesDaRequisicao.length > 0) {
                throw new Error('receita com a mesma descrição já cadastrada nesse mês')
            } else {
                try {
                    const receitaCriada = await database.Receitas.create(novaReceita);
                    return res.status(200).json(receitaCriada);
                } catch (error) {
                    return res.status(400).json(`erro: ${error.message} - não foi possível cadastrar nova receita`)
                }
            }
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async listagemDeReceitas(req, res) {
        try {
            const todasReceitas = await database.Receitas.findAll();
            return res.status(200).json(todasReceitas);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
}

module.exports = Receitas;