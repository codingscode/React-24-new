import React from 'react'

import classes from './itensNavegacao.css'
import ItemNavegacao from './itemNavegacao/itemNavegacao'

const itensNavegacao = () => (
    <ul className={classes.ItensNavegacao}>
        <ItemNavegacao link="/" active>Construtor Burger</ItemNavegacao>
        <ItemNavegacao link="/">Checkout</ItemNavegacao>
    </ul>
)

export default itensNavegacao;