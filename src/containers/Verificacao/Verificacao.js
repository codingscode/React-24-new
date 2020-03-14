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
     
     componentDidMount() {
         const consulta = new URLSearchParams(this.props.location.search)
         const ingredientes = {}
         for (let param of consulta.entries()) {
            // ['salada', '1']
            ingredientes[param[0]] = +param[1]
         }
         this.setState({ingredientes: ingredientes})
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