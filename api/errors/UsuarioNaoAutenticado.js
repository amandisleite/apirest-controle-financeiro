class UsuarioNaoAutenticado extends Error {
    constructor () {
        super(`Usuário não autenticado`);

        this.name = 'UsuarioNaoAutenticado';
        this.errorId = 6;
    }
}

module.exports = UsuarioNaoAutenticado;