import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import VerifiSumario from '../../componentes/Pedido/VerifiSumario/VerifiSumario'
import InfoContato from './InfoContato/InfoContato'

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
                  <Route path={this.props.match.path + '/info-contato'} component={InfoContato} />   
              </div>
         )
     }

}

export default Checkout