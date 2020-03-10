import React, {Component} from 'react'

import VerifiSumario from '../../componentes/Pedido/VerifiSumario/VerifiSumario'

class Checkout extends Component {
     state = {
        ingredientes: {
           salada: 1,
           carne: 1,
           queijo: 1,
           bacon: 1
        }
     }
     
     render() {
         return (
              <div>
                  <VerifiSumario ingredientes={this.state.ingredientes}/>
              </div>
         )
     }

}

export default Checkout