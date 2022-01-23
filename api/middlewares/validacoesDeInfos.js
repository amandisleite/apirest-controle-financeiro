const RegistroJaExiste = require("../errors/RegistroJaExiste");

const moment = require("moment");
const { Op } = require("sequelize");
const CampoInvalido = require("../errors/CampoInvalido");

class Validacao {

    static async validaInfo(novaInfo, tabela) {

        for (campo in novaInfo) {
            if (campo.length === 0)
            {
                return false;
            } else {
                return true;
            }
        }

        let temTodosOsCampos = this.camposPreenchidos(novaInfo);

        if (temTodosOsCampos) {
            const dataNovaInfo = novaInfo.data;
            const descricaoNovaInfo = novaInfo.descricao;
        
            tabela = tabela;
        
            const comecoDoMes = moment(dataNovaInfo).startOf('month').format('YYYY-MM-DD');
            const finalDoMes = moment(dataNovaInfo).endOf('month').format('YYYY-MM-DD');
        
            try {
                const infoExisteEmAlgumRegistro = await database.tabela.findOne({
                        where: {
                            [Op.and]: {
                                descricao: descricaoNovaInfo,
                                data: {
                                        [Op.gte]: comecoDoMes,
                                        [Op.lte]: finalDoMes
                                }
                            }
                        }
                    }
                );
                
                if (infoExisteEmAlgumRegistro) {
                    return true;
                } else {
                    return false;
                }
        
            } catch (error) {
                throw new RegistroJaExiste;
            }
        } else {
            throw new CampoInvalido(campo);
        }
    
    }

    static camposPreenchidos(novaInfo) {

        for (campo in novaInfo) {
            if (campo.length === 0)
            {
                return false;
            } else {
                return true;
            }
        }

    }
    /*
        const campos = ['descricao', 'valor', 'data'];

        campos.forEach(campo => {
            const valor = this[campo];

            if (typeof valor !== 'string' || valor.length === 0) {
                return false;
            } else {
                return true;
            }
        })

        return;
    }
    */
    
}

module.exports = Validacao;
