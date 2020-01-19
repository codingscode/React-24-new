import React, {Component} from 'react'

import Auxiliar from '../../hoc/Auxiliar'
import Burger from '../../componentes/Burger/Burger'


class burgerConstrutor extends Component {
    render() {
        return (
          <Auxiliar>
             <Burger />
             <div>Controle de Construção</div>
          </Auxiliar>
        )
    }
}

export default burgerConstrutor;
