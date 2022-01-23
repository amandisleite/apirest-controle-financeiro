const bodyParser = require("body-parser");

const receitas = require("./receitasRoute");
const despesas = require("./despesasRoute");

const errors = require("../middlewares/tratamentoDeErro")

module.exports = app => {
    
    app.use(bodyParser.json());

    app.use(receitas,
            despesas,
            errors);
}
