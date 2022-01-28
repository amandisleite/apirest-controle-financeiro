const ReceitasServices = require("../services/ReceitasServices");
const receitasServices = new ReceitasServices;
const DespesasServices = require("../services/DespesasServices");
const despesasServices = new DespesasServices;

const error = require("../errors");

class GeralController {

    static async resumoDoMes(req, res, next) {
        const { ano, mes } = req.params;      

        try {
            let valorTodasReceitas = await receitasServices.somaTodosRegistrosMesmoMes(ano, mes)
            let valorTodasDespesas = await despesasServices.somaTodosRegistrosMesmoMes(ano, mes)

            const categorias = ['Alimentação', 'Saúde', 'Moradia', 'Transporte', 'Educação', 'Lazer', 'Imprevistos', 'Outras']
            const cadaCategoria = [];

            for (let cat of categorias) {
                let valorPorCategoria = await despesasServices.somaPorCategoriaMesmoMes(cat, ano, mes)
                if (valorPorCategoria === null) valorPorCategoria = 0;
                cadaCategoria.push(`valor de ${cat} é de ${valorPorCategoria.toFixed(2)}`)
            }

            if (valorTodasDespesas === null) {
                valorTodasDespesas = 0;
            }

            if (valorTodasReceitas === null) {
                valorTodasReceitas = 0;
            }

            const resumo = {
                receitas: `O valor total de receitas em ${mes}/${ano} é de R$ ${valorTodasReceitas.toFixed(2)}`,
                despesas: `O valor total de despesas em ${mes}/${ano} é de R$ ${valorTodasDespesas.toFixed(2)}`,
                saldo: `O saldo do final do mês é de R$ ${(valorTodasReceitas - valorTodasDespesas).toFixed(2)}`,
                valorTotalPorCategoria: cadaCategoria
            }

            return res.status(200).json(resumo)
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = GeralController;