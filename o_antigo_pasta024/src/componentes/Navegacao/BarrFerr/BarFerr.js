import React from 'react'

import classes from './BarFerr.css'
import Logo from '../../Logo/Logo'
import ItensNavegacao from '../itensNavegacao/itensNavegacao'
import GavetaToggle from '../GavetaLateral/GavetaToggle/GavetaToggle'

const barferr = (props) => (
    <header className={classes.BarFerr}>
        <GavetaToggle clicado={props.gavetaToggleClicado}/>
        <div className={classes.Logo}>
           <Logo />
        </div>
        <nav className={classes.desktopSomente}>
            <ItensNavegacao />
        </nav>
    </header>
)

export default barferr;