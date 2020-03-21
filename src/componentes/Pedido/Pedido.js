import React from 'react'

import classes from './Pedido.css'

const pedido = (props) => (
    <div className={classes.Pedido}>
        <p>Ingredientes: Salada (1)</p>
        <p>Preco: <strong>USD {Number.parseFloat(props.preco).toFixed(2)}</strong></p>
    </div>
)

export default pedido