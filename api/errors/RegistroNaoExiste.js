class RegistroNaoExiste extends Error {
    constructor (id) {
        super(`Não há registros com o id ${id}`);

        this.name = 'RegistroNaoExiste';
        this.errorId = 2;
    }
}

module.exports = RegistroNaoExiste;