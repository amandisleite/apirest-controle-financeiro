const { Router } = require("express");
const DespesaController = require("../controllers/DespesaController");
const auth = require("../middlewares/usuarioAutenticado");

const router = Router();

router.post('/despesas', auth.asseguraAutenticacao, DespesaController.cadastroDeDespesa);
router.get('/despesas', auth.asseguraAutenticacao, DespesaController.listagemDeDespesa);
router.get('/despesas/:id', auth.asseguraAutenticacao, DespesaController.detalhamentoDeDespesa);
router.get('/despesas/:ano/:mes', auth.asseguraAutenticacao, DespesaController.listagemDeDespesasMesmoMes);
router.put('/despesas/:id', auth.asseguraAutenticacao, DespesaController.atualizaDespesa);
router.delete('/despesas/:id', auth.asseguraAutenticacao, DespesaController.apagaDespesa);

module.exports = router;