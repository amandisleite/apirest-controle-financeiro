const database = require("../models");

const moment = require("moment");
const { Op, sequelize } = require("sequelize");

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

    async pegaTodosRegistros(where = {}) {
        return database[this.nomeDoModelo]
        .findAll({ where: { ...where }})
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

    async consultaRegistroMesmoMes(ano, mes) {

        const comecoDoMes = moment(`${ano}-${mes}`).startOf('month').format('YYYY-MM-DD');
        const finalDoMes = moment(`${ano}-${mes}`).endOf('month').format('YYYY-MM-DD');
        
        return database[this.nomeDoModelo]
        .findAll({ where: {
                data: {
                    [Op.gte]: comecoDoMes,
                    [Op.lte]: finalDoMes
                    }}}
        );
    }

    async somaTodosRegistrosMesmoMes(ano, mes) {
        const comecoDoMes = moment(`${ano}-${mes}`).startOf('month').format('YYYY-MM-DD');
        const finalDoMes = moment(`${ano}-${mes}`).endOf('month').format('YYYY-MM-DD');

        return database[this.nomeDoModelo]
        .sum('valor',
            { where: {
            data: {
                [Op.gte]: comecoDoMes,
                [Op.lte]: finalDoMes
                }}})
    }

    async somaPorCategoriaMesmoMes(categoria, ano, mes) {
        const comecoDoMes = moment(`${ano}-${mes}`).startOf('month').format('YYYY-MM-DD');
        const finalDoMes = moment(`${ano}-${mes}`).endOf('month').format('YYYY-MM-DD');

        return database[this.nomeDoModelo]
        .sum('valor',
            { where: {
                categorias: categoria,
                data: {
                    [Op.gte]: comecoDoMes,
                    [Op.lte]: finalDoMes
                    }}})
    }
}

module.exports = Services;