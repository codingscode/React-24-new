import React from 'react'

import Logo from '../../Logo/Logo'
import ItensNavegacao from '../itensNavegacao/itensNavegacao'
import './GavetaLateral.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxiliar from  '../../../hoc/Auxiliar'

const gavetaLateral = (props) => {
    let classesAnexadas = ['GavetaLateral', 'Fechar']
    if (props.aberto) {
        classesAnexadas = ['GavetaLateral', 'Abrir']
    }
   
    return (
      <Auxiliar>
         <Backdrop show={props.aberto} clicado={props.fechado}/>
         <div className={classesAnexadas.join(' ')}>
             <div className={'Logo'}>
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