class EmailSenhaInvalidos extends Error {
    constructor () {
        super('e-mail ou senha inválidos');

        this.name = 'EmailSenhaInvalidos';
        this.errorId = 5;
    }
}

module.exports = EmailSenhaInvalidos;