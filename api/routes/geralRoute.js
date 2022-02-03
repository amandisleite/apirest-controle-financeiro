const { Router } = require("express");
const GeralController = require("../controllers/GeralController");
const auth = require("../middlewares/usuarioAutenticado");

const router = Router();

router.get('/resumo/:ano/:mes', auth.asseguraAutenticacao, GeralController.resumoDoMes);

module.exports = router;