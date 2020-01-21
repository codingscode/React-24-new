import React, {Component} from 'react'

import Auxiliar from '../../hoc/Auxiliar'
import Burger from '../../componentes/Burger/Burger'


class burgerConstrutor extends Component {

    /*
    constructor(props) {
      super(props);
      this.state = {...}
    }
    */

    state = {
      ingredientes: {
        salada: 1,  //0
        bacon: 1,   //0
        queijo: 2,  //0
        carne: 2    //0
      }
    }

    render() {
        return (
          <Auxiliar>
             <Burger ingredientes={this.state.ingredientes}/>
             <div>Controle de Construção</div>
          </Auxiliar>
        )
    }
}

export default burgerConstrutor;
