const Services = require("./Services");
const bcrypt = require("bcrypt");

class UsuariosServices extends Services {
    constructor() {
        super('Usuarios')
    }

    async login(novoCadastro) {
        const senha = novoCadastro.senha;
        const senhaHash = await bcrypt.hash(senha, 12);

        return await this.cadastraRegistro({
            nome: novoCadastro.nome,
            email: novoCadastro.email,
            senha: senhaHash
        })
    }

    async validaEmail(dados) {
        const emailUsuario = dados.email;
        const where = {};

        emailUsuario ? where.email = emailUsuario : null;
        return await this.pegaUmRegistro(where);
    }

    async validaSenha(dados) {
        const senhaPassada = dados.senha;
        const emailExiste = await this.validaEmail(dados);

        if (emailExiste === null) {
            return false;
        } else {
            const senhaNoBanco = emailExiste.senha;
            const senhasSaoIguais = await bcrypt.compare(senhaPassada, senhaNoBanco);
            
            return senhasSaoIguais;
        }
    }
}

module.exports = UsuariosServices;