const { Router } = require("express");

const DespesaController = require("../controllers/DespesaController");

const router = Router();

router.post('/despesas', DespesaController.cadastroDeDespesa);
router.get('/despesas', DespesaController.listagemDeDespesa);
router.get('/despesas/:id', DespesaController.detalhamentoDeDespesa);
router.put('/despesas/:id', DespesaController.atualizaDespesa);
router.delete('/despesas/:id', DespesaController.apagaDespesa);

module.exports = router;