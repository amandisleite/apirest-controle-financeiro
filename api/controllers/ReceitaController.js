const database = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");

class Receitas {
    static async cadastroDeReceita(req, res) {
        const novaReceita = req.body;
        const dataNovaReceita = req.body.data;
        const descricaoNovaReceita = req.body.descricao;

        const comecoDoMes = moment(dataNovaReceita).startOf('month').format('YYYY-MM-DD');
        const finalDoMes = moment(dataNovaReceita).endOf('month').format('YYYY-MM-DD');

        try {
            const descricaoEmTodasReceitas = await database.Receitas.findOne({
                where: {
                    [Op.and]: {
                        descricao: descricaoNovaReceita,
                        data: {
                                [Op.gte]: comecoDoMes,
                                [Op.lte]: finalDoMes
                        }
                    }
                }});

            if (descricaoEmTodasReceitas) {
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