import * as acaoTipos from './acoesTypes'


export const adicIngrediente = (nome) => {

    return {
        type: acaoTipos.ADIC_INGREDIENTE,
        nomeIngrediente: nome
    }
}

export const removIngrediente = (nome) => {

    return {
        type: acaoTipos.REMOV_INGREDIENTE,
        nomeIngrediente: nome
    }
}
