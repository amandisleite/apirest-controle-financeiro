class CampoInvalido extends Error {
    constructor (campo) {
        super(`o campo ${campo} está inválido`);

        this.name = 'CampoInvalido';
        this.errorId = 0;
    }
}

module.exports = CampoInvalido;