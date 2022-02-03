const { Router } = require("express");

const UsuarioController = require("../controllers/UsuarioController");

const router = Router();

router.post('/usuarios', UsuarioController.cadastroDeUsuario);

module.exports = router;