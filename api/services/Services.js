const database = require("../models");

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



}

module.exports = Services;