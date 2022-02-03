const { Router } = require("express");
const ReceitaController = require("../controllers/ReceitaController");
const auth = require("../middlewares/usuarioAutenticado");

const router = Router();

router.post('/receitas', auth.asseguraAutenticacao, ReceitaController.cadastroDeReceita);
router.get('/receitas', auth.asseguraAutenticacao, ReceitaController.listagemDeReceitas);
router.get('/receitas/:id', auth.asseguraAutenticacao, ReceitaController.detalhamentoDeReceita);
router.get('/receitas/:ano/:mes', auth.asseguraAutenticacao, ReceitaController.listagemDeReceitasMesmoMes);
router.put('/receitas/:id', auth.asseguraAutenticacao, ReceitaController.atualizaReceita);
router.delete('/receitas/:id', auth.asseguraAutenticacao, ReceitaController.apagaReceita);

module.exports = router;