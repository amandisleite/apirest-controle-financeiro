const database = require("../models");

const ReceitasServices = require("../services/ReceitasServices");
const receitasServices = new ReceitasServices;

const RegistroPraAtualizarJaCriado = require("../errors/RegistroPraAtualizarJaCriado");
const RegistroJaCriado = require("../errors/RegistroJaCriado");
const RegistroNaoExiste = require("../errors/RegistroNaoExiste");

const { validaInfo } = require("../middlewares/validacoesDeInfos");

class ReceitaController {

    static async cadastroDeReceita(req, res, next) {
        let novaReceita = req.body;
        let id = 0;

        try {
            let receitaJaExiste = await validaInfo(novaReceita, id, database.Receitas);
            
            if (receitaJaExiste) {
                throw new RegistroJaCriado;
            } else {
                const receitaCriada = await receitasServices.cadastraRegistro(novaReceita);
                return res.status(201).json(receitaCriada);
            }

        } catch (error) {
            return next(error);
        }
    }

    static async listagemDeReceitas(req, res, next) {
        try {
            const todasReceitas = await receitasServices.pegaTodosRegistros();
            return res.status(200).json(todasReceitas);
        } catch (error) {
            return next(error);
        }
    }

    static async detalhamentoDeReceita(req, res, next) {
        const { id } = req.params;

        try {
            const umaReceita = await receitasServices.pegaUmRegistro(Number(id));
            if (umaReceita) {
                return res.status(200).json(umaReceita)
            } else {
                throw new RegistroNaoExiste;
            }

        } catch (error) {
            return next(error);
        }
    }

    static async atualizaReceita(req, res, next) {
        const { id } = req.params;
        const novasInfos = req.body;

        try {
   
            let receitaJaExiste = await validaInfo(novasInfos, id, database.Receitas);
            
            if (receitaJaExiste) {
                throw new RegistroPraAtualizarJaCriado;
            } else {
                await receitasServices.atualizaRegistro(novasInfos, Number(id));
                const receitaAtualizada = await receitasServices.pegaUmRegistro(Number(id));
                return res.status(202).json(`receita teve seus dados atualizados para:
                ${Object.entries(receitaAtualizada.dataValues)}`);
            }

        } catch (error) {
            return next(error);
        }
    }

    static async apagaReceita(req, res, next) {
        const { id } = req.params;

        try {
            const existeReceita = await receitasServices.pegaUmRegistro(Number(id));
            if (existeReceita) {
                await database.Receitas.destroy({
                    where: { id: Number(id) }
                })
                return res.status(202).json(`receita ${id} deletada`)
            } else {
                throw new RegistroNaoExiste(id);
            }

        } catch (error) {
            return next(error);
        }
    }
}

module.exports = ReceitaController;