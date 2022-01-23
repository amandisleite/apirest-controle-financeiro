const bodyParser = require("body-parser");

const receitas = require("./receitasRoute");
const despesas = require("./despesasRoute");


module.exports = app => {
    
    app.use(bodyParser.json());

    app.use(receitas,
            despesas);

}
