import React from 'react'

import Logo from '../../Logo/Logo'
import ItensNavegacao from '../itensNavegacao/itensNavegacao'
import classes from './GavetaLateral.css'

const gavetaLateral = (props) => {
   return (
       <div className={classes.GavetaLateral}>
           <div className={classes.Logo}>
             <Logo />
           </div>
           <nav>
               <ItensNavegacao />
           </nav>
       </div>
   )
}

export default gavetaLateral;