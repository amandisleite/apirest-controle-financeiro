const { Router } = require("express");

const GeralController = require("../controllers/GeralController");

const router = Router();

router.get('/resumo/:ano/:mes', GeralController.resumoDoMes);

module.exports = router;