const database = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");

class Despesas {
    static async cadastroDeDespesa(req, res) {
        let novaDespesa = req.body;

        try {
            let despesaJaExiste = await validaDespesa(novaDespesa);
            
            if (despesaJaExiste) {
                throw new Error('despesa com a mesma descrição já cadastrada nesse mês')
            } else {
                const despesaCriada = await database.Despesas.create(novaDespesa);
                return res.status(200).json(despesaCriada);
            }

        } catch (error) {
            return res.status(400).json(`erro: ${error.message} - não foi possível cadastrar nova despesa`)
        }
    }

    static async listagemDeDespesa(req, res) {
        try {
            const todasDespesas = await database.Despesas.findAll();
            return res.status(200).json(todasDespesas);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async detalhamentoDeDespesa(req, res) {
        const { id } = req.params;

        try {
            const umaDespesa = await database.Despesas.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(umaDespesa)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async atualizaDespesa(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;

        try {
            let despesaJaExiste = await validaDespesa(novasInfos);
            
            if (despesaJaExiste) {
                throw new Error('receita com a mesma descrição já cadastrada nesse mês')
            } else {
                await database.Despesas.update(novasInfos, {
                    where: { id: Number(id) }
                })
                const despesaAtualizada = await database.Despesas.findOne({
                    where: { id: Number(id) }
                });
                return res.status(200).json(despesaAtualizada);
            }

        } catch (error) {
            return res.status(400).json(`erro: ${error.message} - não foi possível atualizar despesa`)
        }
    }

    static async apagaDespesa(req, res) {
        const { id } = req.params;

        try {
            const existeDespesa = await database.Despesas.findOne({
                where: { id: Number(id) }
            })
            if (existeDespesa) {
                await database.Despesas.destroy({
                    where: { id: Number(id) }
                })
                return res.status(200).json(`despesa ${id} deletada`)
            } else {
                return res.status(400).json(`erro: ${error.message} - despesa de ${id} não existe`)
            }

        } catch (error) {
            return res.status(400).json(`erro: ${error.message} - despesa não pode ser deletada`)
        }
    }
}

async function validaDespesa(novaDespesa) {

    const dataNovaDespesa = novaDespesa.data;
    const descricaoNovaDespesa = novaDespesa.descricao;

    const comecoDoMes = moment(dataNovaDespesa).startOf('month').format('YYYY-MM-DD');
    const finalDoMes = moment(dataNovaDespesa).endOf('month').format('YYYY-MM-DD');

    try {
        const dadoExisteEmAlgumaDespesa = await database.Despesas.findOne({
                where: {
                    [Op.and]: {
                        descricao: descricaoNovaDespesa,
                        data: {
                                [Op.gte]: comecoDoMes,
                                [Op.lte]: finalDoMes
                        }
                    }
                }
            }
        );
        
        if (dadoExisteEmAlgumaDespesa) {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        return error.message
    }
}


module.exports = Despesas;