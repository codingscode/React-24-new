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
     
     gerenVerifiCancelado = () => {
        this.props.history.goBack()
     }
     
     gerenVerifiContinuado = () => {
        this.props.history.replace('/verificacao/info-contato')
     }

     render() {
         return (
              <div>
                  <VerifiSumario ingredientes={this.state.ingredientes}
                      verifiCancelado={this.gerenVerifiCancelado} verifiContinuado={this.gerenVerifiContinuado}/>
              </div>
         )
     }

}

export default Checkout