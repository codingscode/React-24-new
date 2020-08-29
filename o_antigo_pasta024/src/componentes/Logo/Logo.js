import React from 'react'

import burgerLogo from '../../assets/imagens/burger-logo.png'
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MeuBurger"/>
    </div>
)

export default logo;