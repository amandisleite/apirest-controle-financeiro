const DespesasServices = require("../services/DespesasServices");
const despesasServices = new DespesasServices;

const error = require("../errors");

class DespesaController {
    static async cadastroDeDespesa(req, res, next) {
        let novaDespesa = req.body;

        try {
            let despesaJaExiste = await despesasServices.validaSeRegistroExisteMesmoMes(novaDespesa);
            
            if (despesaJaExiste) {
                throw new error.RegistroJaCriado;
            } else {
                const despesaCriada = await despesasServices.cadastraRegistro(novaDespesa);
                return res.status(201).json(despesaCriada);
            }

        } catch (error) {
            return next(error);
        }
    }

    static async listagemDeDespesa(req, res, next) {
        const { descricao, categoria } = req.query;
        const where = {};

        descricao ? where.descricao = descricao : null;
        categoria ? where.categorias = categoria : null;

        try {
            const todasDespesas = await despesasServices.pegaTodosRegistros(where);
            return res.status(200).json(todasDespesas);
        } catch (error) {
            return next(error);
        }
    }

    static async listagemDeDespesasMesmoMes(req, res, next) {
        const { ano, mes } = req.params;

        try {
            const despesasMesmoMes = await despesasServices.consultaRegistroMesmoMes(ano, mes);
            return res.status(200).json(despesasMesmoMes);
        } catch (error) {
            return next(error);
        }
    }

    static async detalhamentoDeDespesa(req, res, next) {
        const { id } = req.params;
        const where = {};

        id ? where.id = id : null;

        try {
            const umaDespesa = await despesasServices.pegaUmRegistro(where);
            if (umaDespesa) {
                return res.status(200).json(umaDespesa)
            } else {
                throw new error.RegistroNaoExiste;
            }

        } catch (error) {
            return next(error);
        }
    }

    static async atualizaDespesa(req, res, next) {
        const { id } = req.params;
        const novasInfos = req.body;

        try {
            let despesaJaExiste = await despesasServices.validaSeRegistroExisteMesmoMes(novasInfos);
            
            if (despesaJaExiste) {
                throw new error.RegistroPraAtualizarJaCriado;
            } else {
                await despesasServices.atualizaRegistro(novasInfos, Number(id));
                const despesaAtualizada = await despesasServices.pegaUmRegistro(Number(id));
                return res.status(202).json((`despesa teve seus dados atualizados para:
                ${Object.entries(despesaAtualizada.dataValues)}`));
            }

        } catch (error) {
            return next(error);
        }
    }

    static async apagaDespesa(req, res, next) {
        const { id } = req.params;
        const where = {};

        id ? where.id = id : null;

        try {
            const existeDespesa = await despesasServices.pegaUmRegistro(where);
            if (existeDespesa) {
                await despesasServices.apagaRegistro(Number(id));
                return res.status(202).json(`despesa ${id} deletada`)
            } else {
                throw new error.RegistroNaoExiste(id);
            }

        } catch (error) {
            return next(error);
        }
    }
}

module.exports = DespesaController;