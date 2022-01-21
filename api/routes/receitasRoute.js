const { Router } = require("express");

const ReceitaController = require("../controllers/ReceitaController");

const router = Router();

router.post('/receitas', ReceitaController.cadastroDeReceita);
router.get('/receitas', ReceitaController.listagemDeReceitas);

module.exports = router;