import * as acaoTipos from './acoes'


const stateInicial = {
    ingredientes: {
        salada: 0, bacon: 0, queijo: 0, carne: 0
    },
    precoTotal: 4
}
 
const reducer = (state = stateInicial, acao) => {
    switch (acao.type) {
        case acaoTipos.ADIC_INGREDIENTE:
           return { ...state, ingredientes: {...state.ingredientes, 
                                             [acao.nomeIngrediente]: state.ingredientes[acao.nomeIngrediente] + 1} }
        case acaoTipos.REMOV_INGREDIENTE:
           return { ...state, ingredientes: {...state.ingredientes, 
                                             [acao.nomeIngrediente]: state.ingredientes[acao.nomeIngrediente] - 1} }
        default:
            return state
    }
    
}
 
export default reducer


