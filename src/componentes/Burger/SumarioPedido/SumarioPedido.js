import React from 'react'

import Auxiliar from '../../../hoc/Auxiliar'
import Botao from '../../UI/Botao/Botao'


const pedidoSumario = (props) => {
    const sumarioIngredientes = Object.keys(props.ingredientes)
        .map(igKey => {
            return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredientes[igKey]}</li>)
        })

    return (
        <Auxiliar>
            <h3>Seu Pedido</h3>
            <p>Um burger delicioso com os seguintes ingredientes : </p>
            <ul>
                {sumarioIngredientes}
            </ul>
            <p>Continuar finalização da compra ?</p>
            <Botao btnType="Perigo" clicado={props.compraCancelada}>Cancelar</Botao>
            <Botao btnType="Sucedido" clicado={props.compraContinuada}>Continuar</Botao>
        </Auxiliar>
    )
}

export default pedidoSumario;