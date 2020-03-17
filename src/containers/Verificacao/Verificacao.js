import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import VerifiSumario from '../../componentes/Pedido/VerifiSumario/VerifiSumario'
import InfoContato from './InfoContato/InfoContato'

class Checkout extends Component {
     state = {
        ingredientes: null,
        preco: 0
     }
     
     componentWillMount() {
         const consulta = new URLSearchParams(this.props.location.search)
         const ingredientes = {}
         let preco = 0
         for (let param of consulta.entries()) {
            // ['salada', '1']
            if (param[0] === 'preco') {
               preco = param[1]
            }
            else {
               ingredientes[param[0]] = +param[1]
            }
         }
         this.setState({ingredientes: ingredientes, precoTotal: preco})
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
                  <Route path={this.props.match.path + '/info-contato'} 
                      render={(props) => (<InfoContato ingredientes={this.state.ingredientes} 
                        preco={this.state.precoTotal} {...props}/>)} />   
              </div>
         )
     }

}

export default Checkout