import React from 'react'

import classes from './BarFerr.css'
import Logo from '../../Logo/Logo'
import ItensNavegacao from '../itensNavegacao/itensNavegacao'

const barferr = (props) => (
    <header className={classes.BarFerr}>
        <div>MENU</div>
        <Logo />
        <nav>
            <ItensNavegacao />
        </nav>
    </header>
)

export default barferr;