const moment = require("moment");
const { Op } = require("sequelize");

const RegistroJaExiste = require("../errors/RegistroJaExiste");
const CampoInvalido = require("../errors/CampoInvalido");

class Validacao {
    
    static async validaInfo(novaInfo, id, database) {
        
        let contemTodasAsInfos = Object.values(novaInfo).length >= 3;
        
        if (contemTodasAsInfos) {
            const dataNovaInfo = novaInfo.data;
            const descricaoNovaInfo = novaInfo.descricao;
            
            const comecoDoMes = moment(dataNovaInfo).startOf('month').format('YYYY-MM-DD');
            const finalDoMes = moment(dataNovaInfo).endOf('month').format('YYYY-MM-DD');
            
            try {

                const infoExisteEmAlgumRegistro = await database.findOne({
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
                    if (!id) {
                        return true;
                    } else {
                    return false;
                    }
                }
                
            } catch (error) {
                console.log(error.message)
                throw new RegistroJaExiste;
            }

        } else {
            throw new CampoInvalido;
        }
    }
}

module.exports = Validacao;
