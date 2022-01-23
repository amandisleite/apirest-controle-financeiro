const moment = require("moment");
const { Op } = require("sequelize");

const RegistroJaExiste = require("../errors/RegistroJaExiste");
const CampoInvalido = require("../errors/CampoInvalido");

class ModeloInfo {
    constructor ({ descricao, valor, data }) {
        this.descricao = descricao;
        this.valor = valor;
        this.data = data;
    }
}

class Validacao {

    static async validaInfo(novaInfo, tabela) {

        let contemTodasAsInfos = Object.values(novaInfo).length >= 3;

        if (contemTodasAsInfos) {
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
            throw new CampoInvalido;
        }
    }

    static camposPreenchidos(info) {

        // let formatoInfos = new ModeloInfo(novaInfo);

        let infosEmArray = Object.values(info);

        let temCampoVazio = infosEmArray.filter((chave, campo) => typeof infosEmArray[campo] === "undefined");

        if (temCampoVazio.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    
}

module.exports = Validacao;
