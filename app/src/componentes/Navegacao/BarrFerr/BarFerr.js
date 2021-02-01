import React from 'react'

import './BarFerr.css'
import Logo from '../../Logo/Logo'
import ItensNavegacao from '../itensNavegacao/itensNavegacao'
import GavetaToggle from '../GavetaLateral/GavetaToggle/GavetaToggle'

const barferr = (props) => (
    <header className={'BarFerr'}>
        <GavetaToggle clicado={props.gavetaToggleClicado}/>
        <div className={'.Logo'}>
           <Logo />
        </div>
        <nav className={'desktopSomente'}>
            <ItensNavegacao />
        </nav>
    </header>
)

export default barferr;