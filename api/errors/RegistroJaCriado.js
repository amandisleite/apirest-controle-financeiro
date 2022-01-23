class RegistroJaCriado extends Error {
    constructor () {
        super('registro adicionado já foi criado');

        this.name = 'RegistroJaCriado';
        this.errorId = 3;
    }
}

module.exports = RegistroJaCriado;