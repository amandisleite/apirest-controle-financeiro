class CampoInvalido extends Error {
    constructor () {
        super('há campos não preenchidos');

        this.name = 'CampoInvalido';
        this.errorId = 0;
    }
}

module.exports = CampoInvalido;