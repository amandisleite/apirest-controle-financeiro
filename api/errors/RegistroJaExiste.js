class RegistroJaExiste extends Error {
    constructor () {
        super(`o registro cadastrado já existe`);

        this.name = 'RegistroJaExiste';
        this.errorId = 1;
    }
}

module.exports = RegistroJaExiste;