import React from 'react'

import Burger from '../../Burger/Burger'
import Botao from '../../UI/Botao/Botao'
import classes from './VerifiSumario.css'

const verifiSumario = (props) => {
    return (
        <div className={classes.VerifiSumario}>
            <h1>Esperamos que tenha gosto bom!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredientes={props.ingredientes} />
            </div>
            <Botao btnType="Perigo" clicked >Cancelar</Botao>
            <Botao btnType="Sucedido" clicked >Continuar</Botao>
        </div>
    )
}

export default verifiSumario