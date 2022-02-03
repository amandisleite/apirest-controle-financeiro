const { Router } = require("express");
const ReceitaController = require("../controllers/ReceitaController");
const auth = require("../middlewares/usuarioAutenticado");

const router = Router();

router.post('/receitas', ReceitaController.cadastroDeReceita);
router.get('/receitas', auth.asseguraAutenticacao, ReceitaController.listagemDeReceitas);
router.get('/receitas/:id', ReceitaController.detalhamentoDeReceita);
router.get('/receitas/:ano/:mes', ReceitaController.listagemDeReceitasMesmoMes);
router.put('/receitas/:id', ReceitaController.atualizaReceita);
router.delete('/receitas/:id', ReceitaController.apagaReceita);

module.exports = router;