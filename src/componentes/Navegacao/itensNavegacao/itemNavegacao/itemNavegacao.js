import React from 'react'
import {NavLink} from 'react-router-dom'

import './itemNavegacao.css'

const itemNavegacao = (props) => (
    <li className={'ItemNavegacao'}>
        <NavLink activeClassName={'active'} to={props.link} exact={props.exact}>{props.children}</NavLink>
    </li>
)

export default itemNavegacao;