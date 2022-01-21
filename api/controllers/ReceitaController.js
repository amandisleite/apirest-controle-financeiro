const database = require("../models");
const { Op } = require("sequelize");

class Receitas {
    static async cadastroDeReceita(req, res) {
        const novaReceita = req.body;
        const descricaoNovaReceita = req.body.descricao;
        const dataNovaReceita = req.body.data;
        let dataConvertida = new Date(dataNovaReceita.split('/').reverse().join('/'));
        
        try {
            const descricaoEmTodasReceitas = await database.Receitas.findOne({
                where: {
                    [Op.and]: {
                        descricao: descricaoNovaReceita,
                        data: {
                                [Op.lte]: dataNovaReceita,
                                [Op.gte]: new Date(dataConvertida - 30 * 24 * 60 * 60 * 1000)
                        }
                    }
                }
            });
    
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
        // const camposParaAtualizar = {};

        // camposRequisicao.forEach( campo => {
        //     const valor = this[campo];
        //     const camposDeTodasReceitas = database.Receitas.findAll({ where: { descricao: valor }});
        //     // if (valor !== await database.Receitas.findAll({ where: { descricao: valor }})) {
        //         //     camposParaAtualizar[campo] = valor;
        //         // }
        //         if (valor === camposDeTodasReceitas) {
        //             throw new Error('receita já cadastrada nesse mês')
        //         } else {
        //             try {
        //                 const receitaCriada = database.Receitas.create(novaReceita);
        //                 return res.status(200).json(receitaCriada);
        //             } catch (error) {
        //                 return res.status(400).json(error.message)
        //             }
        //         }
        //     })
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