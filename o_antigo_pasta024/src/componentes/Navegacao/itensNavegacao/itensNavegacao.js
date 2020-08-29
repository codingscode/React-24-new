import React from 'react'

import classes from './itensNavegacao.css'
import ItemNavegacao from './itemNavegacao/itemNavegacao'


const itensNavegacao = () => (
    <ul className={classes.ItensNavegacao}>
        <ItemNavegacao link="/" exact>Construtor Burger</ItemNavegacao>
        <ItemNavegacao link="/pedidos">Pedidos</ItemNavegacao>
    </ul>
)

export default itensNavegacao;