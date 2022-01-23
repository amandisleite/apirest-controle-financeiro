const database = require("../models");

const RegistroJaExiste = require("../errors/RegistroJaExiste");
const RegistroNaoExiste = require("../errors/RegistroNaoExiste");

const { validaInfo } = require("../middlewares/validacoesDeInfos");

class Despesas {
    static async cadastroDeDespesa(req, res, next) {
        let novaDespesa = req.body;

        try {
            let despesaJaExiste = await validaInfo(novaDespesa, Despesas);
            
            if (despesaJaExiste) {
                throw new RegistroJaExiste;
            } else {
                const despesaCriada = await database.Despesas.create(novaDespesa);
                return res.status(200).json(despesaCriada);
            }

        } catch (error) {
            return next(error);
        }
    }

    static async listagemDeDespesa(req, res, next) {
        try {
            const todasDespesas = await database.Despesas.findAll();
            return res.status(200).json(todasDespesas);
        } catch (error) {
            return next(error);
        }
    }

    static async detalhamentoDeDespesa(req, res, next) {
        const { id } = req.params;

        try {
            const umaDespesa = await database.Despesas.findOne({
                where: { id: Number(id) }
            })
            if (umaDespesa) {
                return res.status(200).json(umaDespesa)
            } else {
                throw new RegistroNaoExiste;
            }

        } catch (error) {
            return next(error);
        }
    }

    static async atualizaDespesa(req, res, next) {
        const { id } = req.params;
        const novasInfos = req.body;

        try {
            let despesaJaExiste = await validaInfo(novasInfos, Despesas);
            
            if (despesaJaExiste) {
                throw new RegistroJaExiste;
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
            return next(error);
        }
    }

    static async apagaDespesa(req, res, next) {
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
                throw new RegistroNaoExiste(id);
            }

        } catch (error) {
            return next(error);
        }
    }
}

module.exports = Despesas;