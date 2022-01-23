const CampoInvalido = require("../errors/CampoInvalido");
const RegistroJaExiste = require("../errors/RegistroJaExiste");
const RegistroNaoExiste = require("../errors/RegistroNaoExiste");

module.exports = (error, req, res, next) => {

    let status = 500;

    if (error instanceof RegistroNaoExiste || error instanceof RegistroJaExiste) {
        status = 404;
    } 

    if (error instanceof CampoInvalido) {
        status = 400;
    }
    
    res.status(status);
    res.json({
        mensagem: error.message,
        id: error.idError
    })
}