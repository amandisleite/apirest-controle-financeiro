const ReceitasServices = require("../services/ReceitasServices");
const receitasServices = new ReceitasServices;

const error = require("../errors");

class ReceitaController {

    static async cadastroDeReceita(req, res, next) {
        let novaReceita = req.body;
        let id = 0;

        try {
            let receitaJaExiste = await receitasServices.validaSeRegistroExisteMesmoMes(novaReceita);
            
            if (receitaJaExiste) {
                throw new error.RegistroJaCriado;
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
                throw new error.RegistroNaoExiste;
            }

        } catch (error) {
            return next(error);
        }
    }

    static async atualizaReceita(req, res, next) {
        const { id } = req.params;
        const novasInfos = req.body;

        try {
   
            let receitaJaExiste = await receitasServices.validaSeRegistroExisteMesmoMes(novasInfos);
            
            if (receitaJaExiste) {
                throw new error.RegistroPraAtualizarJaCriado;
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
                await receitasServices.apagaRegistro(Number(id))
                return res.status(202).json(`receita ${id} deletada`)
            } else {
                throw new error.RegistroNaoExiste(id);
            }

        } catch (error) {
            return next(error);
        }
    }

    static async consultaReceitasApagadas(req, res, next) {
        console.log('chamei aqui')
        try {
            const receitasApagadas = await receitasServices.pegaRegistrosDeletados();
            return res.status(200).json(receitasApagadas);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = ReceitaController;