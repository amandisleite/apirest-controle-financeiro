const { Router } = require("express");

const UsuarioController = require("../controllers/UsuarioController");

const router = Router();

router.post('/usuarios/signup', UsuarioController.cadastroDeUsuario);
router.post('/usuarios/signin', UsuarioController.loginDeUsuario);

module.exports = router;