import * as acaoTipos from './acoesTypes'
import axios from '../../axios-pedidos'


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

export const setIngredientes = (ingredientes) => {
    return {
       type: acaoTipos.SET_INGREDIENTES,
       ingredientes: ingredientes
    }   
 }

export const buscarIngredientesErro = () => {
    return {
        type: acaoTipos.BUSCAR_INGREDIENTES_ERRO
    }
}
 
export const initIngredientes = () => {
    return dispatch => {
        axios.get('https://react-meu-burger.firebaseio.com/ingredientes.json')
            .then(resposta => {
                dispatch(setIngredientes(resposta.data))
            })
            .catch(erro => {
                dispatch(buscarIngredientesErro())
            })
    }
}

