const database = require("../models");

const RegistroJaExiste = require("../errors/RegistroJaExiste");
const RegistroNaoExiste = require("../errors/RegistroNaoExiste");

const { validaInfo } = require("../middlewares/validacoesDeInfos");

class Receitas {
    static async cadastroDeReceita(req, res, next) {
        let novaReceita = req.body;

        try {
            let receitaJaExiste = await validaInfo(novaReceita, Receitas);
            
            if (receitaJaExiste) {
                throw new RegistroJaExiste;
            } else {
                const receitaCriada = await database.Receitas.create(novaReceita);
                return res.status(200).json(receitaCriada);
            }

        } catch (error) {
            return next(error);
        }
    }

    static async listagemDeReceitas(req, res, next) {
        try {
            const todasReceitas = await database.Receitas.findAll();
            return res.status(200).json(todasReceitas);
        } catch (error) {
            return next(error);
        }
    }

    static async detalhamentoDeReceita(req, res, next) {
        const { id } = req.params;

        try {
            const umaReceita = await database.Receitas.findOne({
                where: { id: Number(id) }
            })
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
            let receitaJaExiste = await validaInfo(novasInfos, Receitas);
            
            if (receitaJaExiste) {
                throw new RegistroJaExiste;
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
            return next(error);
        }
    }

    static async apagaReceita(req, res, next) {
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
                throw new RegistroNaoExiste(id);
            }

        } catch (error) {
            return next(error);
        }
    }
}

/*
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
*/

module.exports = Receitas;