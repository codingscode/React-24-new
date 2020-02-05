import React from 'react'

import classes from './itemNavegacao.css'

const itemNavegacao = (props) => (
    <li className={classes.ItemNavegacao}>
        <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a>
    </li>
)

export default itemNavegacao;