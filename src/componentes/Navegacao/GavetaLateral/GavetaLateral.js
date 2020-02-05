import React from 'react'

import Logo from '../../Logo/Logo'
import ItensNavegacao from '../itensNavegacao/itensNavegacao'
import classes from './GavetaLateral.css'

const gavetaLateral = (props) => {
   return (
       <div className={classes.GavetaLateral}>
           <Logo />
           <nav>
               <ItensNavegacao />
           </nav>
       </div>
   )
}

export default gavetaLateral;