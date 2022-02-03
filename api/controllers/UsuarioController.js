const UsuariosServices = require("../services/UsuariosServices");
const usuariosServices = new UsuariosServices;

const error = require("../errors");

class UsuarioController {
    static async cadastroDeUsuario(req, res, next) {
        let novoCadastro = req.body;

        try {
            let emailJaExiste = await usuariosServices.validaEmail(novoCadastro);
            
            if (emailJaExiste) {
                throw new error.RegistroJaExiste;
            } else {
                const usuarioCriado = await usuariosServices.login(novoCadastro);
                return res.status(201).json(usuarioCriado);
            }

        } catch (error) {
            return next(error);
        }
    }

    static async listagemDeReceitas(req, res, next) {
        const { descricao } = req.query;
        const where = {};

        descricao ? where.descricao = descricao : null;

        try {
            const todasReceitas = await receitasServices.pegaTodosRegistros(where);
            return res.status(200).json(todasReceitas);
        } catch (error) {
            return next(error);
        }
    }

    static async listagemDeReceitasMesmoMes(req, res, next) {
        const { ano, mes } = req.params;

        try {
            const receitasMesmoMes = await receitasServices.consultaRegistroMesmoMes(ano, mes);
            return res.status(200).json(receitasMesmoMes);
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

    static async consultaReceitaPorDescricao(req, res, next) {
        const { descricao } = req.query;
        try {
            const receitasComMesmaDescricao = await receitasServices.consultaPorDescricao(descricao);
            return res.status(200).json(receitasComMesmaDescricao);
        } catch (error) {
            return next(error);
        }
    }
    
}

module.exports = UsuarioController;