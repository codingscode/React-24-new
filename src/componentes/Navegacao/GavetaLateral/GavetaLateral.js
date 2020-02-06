import React from 'react'

import Logo from '../../Logo/Logo'
import ItensNavegacao from '../itensNavegacao/itensNavegacao'
import classes from './GavetaLateral.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxiliar from  '../../../hoc/Auxiliar'

const gavetaLateral = (props) => {
    let classesAnexadas = [classes.GavetaLateral, classes.Fechar]
    if (props.aberto) {
        classesAnexadas = [classes.GavetaLateral, classes.Abrir]
    }
   
    return (
      <Auxiliar>
         <Backdrop show={props.aberto} clicado={props.fechado}/>
         <div className={classesAnexadas.join(' ')}>
             <div className={classes.Logo}>
               <Logo />
             </div>
             <nav>
                 <ItensNavegacao />
             </nav>
         </div>
       </Auxiliar>
   )
}

export default gavetaLateral;