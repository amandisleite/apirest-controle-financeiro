const database = require("../models");

const moment = require("moment");
const { Op } = require("sequelize");

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo;
    }

    async cadastraRegistro(dados) {
        return database[this.nomeDoModelo]
        .create(dados)
    }

    async atualizaRegistro(novosDados, id) {
        return database[this.nomeDoModelo]
        .update(novosDados, { where: { id: id }})
    }

    async pegaTodosRegistros() {
        return database[this.nomeDoModelo]
        .findAll()
    }

    async pegaUmRegistro(id) {
        return database[this.nomeDoModelo]
        .findOne({ where: { id: id }})
    }

    async apagaRegistro(id) {
        return database[this.nomeDoModelo]
        .destroy({ where: { id: id }})
    }

    async pegaRegistrosDeletados() {
        console.log('to aqui')
        return database[this.nomeDoModelo]
        .findAll({ paranoid: false })
    }

    async validaSeRegistroExisteMesmoMes(novosDados) {
        const dataNovaInfo = novosDados.data;
        const descricaoNovaInfo = novosDados.descricao;
        
        const comecoDoMes = moment(dataNovaInfo).startOf('month').format('YYYY-MM-DD');
        const finalDoMes = moment(dataNovaInfo).endOf('month').format('YYYY-MM-DD');

        return database[this.nomeDoModelo]
        .findOne({ where: {
                [Op.and]: {
                    descricao: descricaoNovaInfo,
                    data: {
                        [Op.gte]: comecoDoMes,
                        [Op.lte]: finalDoMes
                        }}}}
        );
    }

    
}

module.exports = Services;