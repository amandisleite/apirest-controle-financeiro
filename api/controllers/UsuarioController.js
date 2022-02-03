const UsuariosServices = require("../services/UsuariosServices");
const usuariosServices = new UsuariosServices;

const jwt = require("jsonwebtoken");

const error = require("../errors");

function geraToken(usuario) {
    const payload = { email: usuario.email };
    const token = jwt.sign(payload, process.env.CHAVE_JWT, { expiresIn: '20s' });
    return token;
}

class UsuarioController {
    static async cadastroDeUsuario(req, res, next) {
        let novoCadastro = req.body;

        try {
            let emailJaExiste = await usuariosServices.validaEmail(novoCadastro);
            
            if (emailJaExiste) {
                throw new error.RegistroJaExiste;
            } else {
                const token = geraToken(novoCadastro);
                const usuarioCriado = await usuariosServices.login(novoCadastro);
                res.set('Authorization', token);
                return res.status(201).json(usuarioCriado);
            }

        } catch (error) {
            return next(error);
        }
    }

    static async loginDeUsuario(req, res, next) {
        let usuario = req.body;

        try {
            let validaUsuario = await usuariosServices.validaSenha(usuario);
            
            if (!validaUsuario) {
                throw new error.EmailSenhaInvalidos;
            } else {
                const token = geraToken(usuario);
                res.set('Authorization', token);
                return res.status(200).json(`usuário logado!`);
            }

        } catch (error) {
            return next(error);
        }
    }
    
}

module.exports = UsuarioController;