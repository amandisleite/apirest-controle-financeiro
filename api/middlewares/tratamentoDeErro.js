const CampoInvalido = require("../errors/CampoInvalido");
const RegistroJaExiste = require("../errors/RegistroJaExiste");
const RegistroNaoExiste = require("../errors/RegistroNaoExiste");
const RegistroPraAtualizarJaCriado = require("../errors/RegistroPraAtualizarJaCriado");
const RegistroJaCriado = require("../errors/RegistroJaCriado");
const EmailSenhaInvalidos = require("../errors/EmailSenhaInvalidos");

module.exports = (error, req, res, next) => {

    let status = 500;

    if (error instanceof RegistroNaoExiste ||
        error instanceof RegistroJaExiste ||
        error instanceof RegistroJaCriado ||
        error instanceof RegistroPraAtualizarJaCriado ||
        error instanceof EmailSenhaInvalidos) {
        status = 404;
    } 

    if (error instanceof CampoInvalido) {
        status = 400;
    }
    
    res.status(status);
    res.json({
        mensagem: error.message,
        id: error.errorId,
        name: error.name
    })
}