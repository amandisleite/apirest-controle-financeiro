const jwt = require("jsonwebtoken");
const errors = require("../errors");

module.exports = {

    asseguraAutenticacao(req, res, next) {
        const token = req.get('Authorization').split(" ")[1];
        console.log(token)
    
        if (!token) {
            throw new errors.UsuarioNaoAutenticado;
        }
    
        try {
            console.log('cheguei aqui')
            const tokenValido = jwt.verify(token, process.env.CHAVE_JWT);
            console.log('cheguei aqui 2')
            req.user = tokenValido;
            console.log('cheguei aqui 3')
            console.log(req.user)
            // if (tokenValido) {
            //     return next();
            // }
            return next();
    
        } catch (error) {
            return next(error);
        }
    }
}

// function usuarioAutenticado(req, res, next) {
//     const token = req.get('Authorization');
//     console.log(token)

//     if (!token) {
//         throw new errors.UsuarioNaoAutenticado;
//     }

//     try {
//         const tokenValido = jwt.verify(token, process.env.CHAVE_JWT);
//         req.user = tokenValido;
//         // if (tokenValido) {
//         //     return next();
//         // }
//         return next();

//     } catch (error) {
//         return next(error);
//     }
// }

// module.exports = usuarioAutenticado;
