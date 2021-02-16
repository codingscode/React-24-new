import * as acaoTipos from '../actions/acoesTypes'


const stateInicial = {
    ingredientes: null,
    precoTotal: 4,
    adiquirivel: false,
    erro: false
}

const PRECOS_INGREDIENTE = {
    salada: 0.5,
    queijo: 0.4,
    carne: 1.3,
    bacon: 0.7
}
 
const reducer = (state = stateInicial, acao) => {
    switch (acao.type) {
        case acaoTipos.ADIC_INGREDIENTE:
           return { ...state, ingredientes: {...state.ingredientes, 
                       [acao.nomeIngrediente]: state.ingredientes[acao.nomeIngrediente] + 1},
                       precoTotal: state.precoTotal + PRECOS_INGREDIENTE[acao.nomeIngrediente] }
        case acaoTipos.REMOV_INGREDIENTE:
           return { ...state, ingredientes: {...state.ingredientes, 
                       [acao.nomeIngrediente]: state.ingredientes[acao.nomeIngrediente] - 1},
                       precoTotal: state.precoTotal - PRECOS_INGREDIENTE[acao.nomeIngrediente] }
        default:
            return state
    }
    
}
 
export default reducer


