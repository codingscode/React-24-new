import React from 'react'
import {NavLink} from 'react-router-dom'

import classes from './itemNavegacao.css'

const itemNavegacao = (props) => (
    <li className={classes.ItemNavegacao}>
        <NavLink activeClassName={classes.active} to={props.link} exact={props.exact}>{props.children}</NavLink>
    </li>
)

export default itemNavegacao;