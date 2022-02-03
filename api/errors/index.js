const CampoInvalido = require("./CampoInvalido");
const EmailSenhaInvalidos = require("./EmailSenhaInvalidos");
const RegistroJaCriado = require("./RegistroJaCriado");
const RegistroJaExiste = require("./RegistroJaExiste");
const RegistroNaoExiste = require("./RegistroNaoExiste");
const RegistroPraAtualizarJaCriado = require("./RegistroPraAtualizarJaCriado");
const UsuarioNaoAutenticado = require("./UsuarioNaoAutenticado");

module.exports = {
    CampoInvalido: CampoInvalido,
    RegistroJaCriado: RegistroJaCriado,
    RegistroJaExiste: RegistroJaExiste,
    RegistroNaoExiste: RegistroNaoExiste,
    RegistroPraAtualizarJaCriado, RegistroPraAtualizarJaCriado,
    EmailSenhaInvalidos: EmailSenhaInvalidos,
    UsuarioNaoAutenticado: UsuarioNaoAutenticado
}