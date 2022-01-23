class RegistroPraAtualizarJaCriado extends Error {
    constructor () {
        super('registro que deseja atualizar já existe');

        this.name = 'RegistroPraAtualizarJaCriado';
        this.errorId = 4;
    }
}

module.exports = RegistroPraAtualizarJaCriado;