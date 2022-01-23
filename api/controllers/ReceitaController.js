const database = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");

class Receitas {
    static async cadastroDeReceita(req, res) {
        let novaReceita = req.body;

        try {
            let receitaJaExiste = await validaReceita(novaReceita);
            
            if (receitaJaExiste) {
                throw new Error('receita com a mesma descrição já cadastrada nesse mês')
            } else {
                const receitaCriada = await database.Receitas.create(novaReceita);
                return res.status(200).json(receitaCriada);
            }

        } catch (error) {
            return res.status(400).json(`erro: ${error.message} - não foi possível cadastrar nova receita`)
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

    static async detalhamentoDeReceita(req, res) {
        const { id } = req.params;

        try {
            const umaReceita = await database.Receitas.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(umaReceita)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async atualizaReceita(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;

        try {
            let receitaJaExiste = await validaAtualizacaoDeReceita(novasInfos);
            
            if (receitaJaExiste) {
                throw new Error('receita com a mesma descrição já cadastrada nesse mês')
            } else {
                await database.Receitas.update(novasInfos, {
                    where: { id: Number(id) }
                })
                const receitaAtualizada = await database.Receitas.findOne({
                    where: { id: Number(id) }
                });
                return res.status(200).json(receitaAtualizada);
            }

        } catch (error) {
            return res.status(400).json(`erro: ${error.message} - não foi possível atualizar receita`)
        }
    }

    static async apagaReceita(req, res) {
        const { id } = req.params;

        try {
            const existeReceita = await database.Receitas.findOne({
                where: { id: Number(id) }
            })
            if (existeReceita) {
                await database.Receitas.destroy({
                    where: { id: Number(id) }
                })
                return res.status(200).json(`receita ${id} deletada`)
            } else {
                return res.status(400).json(`erro: ${error.message} - receita de ${id} não existe`)
            }

        } catch (error) {
            return res.status(400).json(`erro: ${error.message} - receita não pode ser deletada`)
        }
    }
}

async function validaReceita(novaReceita) {

    const dataNovaReceita = novaReceita.data;
    const descricaoNovaReceita = novaReceita.descricao;

    const comecoDoMes = moment(dataNovaReceita).startOf('month').format('YYYY-MM-DD');
    const finalDoMes = moment(dataNovaReceita).endOf('month').format('YYYY-MM-DD');

    try {
        const dadoExisteEmAlgumaReceita = await database.Receitas.findOne({
                where: {
                    [Op.and]: {
                        descricao: descricaoNovaReceita,
                        data: {
                                [Op.gte]: comecoDoMes,
                                [Op.lte]: finalDoMes
                        }
                    }
                }
            }
        );
        
        if (dadoExisteEmAlgumaReceita) {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        return error.message
    }
}

async function validaAtualizacaoDeReceita(novaReceita) {

    const dataNovaReceita = novaReceita.data;
    const descricaoNovaReceita = novaReceita.descricao;

    const comecoDoMes = moment(dataNovaReceita).startOf('month').format('YYYY-MM-DD');
    const finalDoMes = moment(dataNovaReceita).endOf('month').format('YYYY-MM-DD');

    try {
        const dadoExisteEmAlgumaReceita = await database.Receitas.findOne({
                where: {
                    [Op.or]: {
                        descricao: descricaoNovaReceita,
                        data: {
                                [Op.gte]: comecoDoMes,
                                [Op.lte]: finalDoMes
                        }
                    }
                }
            }
        );
        
        if (dadoExisteEmAlgumaReceita) {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        return error.message
    }
}

module.exports = Receitas;