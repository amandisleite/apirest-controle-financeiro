const bodyParser = require("body-parser");

const receitas = require("./receitasRoute");


module.exports = app => {
    
    app.use(bodyParser.json());

    app.use(receitas);

}
