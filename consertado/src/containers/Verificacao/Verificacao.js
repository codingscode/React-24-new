import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'

import VerifiSumario from '../../componentes/Pedido/VerifiSumario/VerifiSumario'
import InfoContato from './InfoContato/InfoContato'

class Verificacao extends Component {
      /*global state, gerengavetaLateralFechado, gerenGavetaToggle */
      /*eslint no-undef: "error"*/
          
     gerenVerifiCancelado = () => {
        this.props.history.goBack()
     }
     
     gerenVerifiContinuado = () => {
        this.props.history.replace('/verificacao/info-contato')
     }

     render() {
         return (
              <div>
                  <VerifiSumario ingredientes={this.props.meus_ings}
                      verifiCancelado={this.gerenVerifiCancelado} verifiContinuado={this.gerenVerifiContinuado}/>
                  <Route path={this.props.match.path + '/info-contato'} 
                      component={InfoContato} />   
              </div>
         )
     }

}

const mapStateParaProps = state => {
   return {
       meus_ings: state.ingredientes
   }
}

export default connect(mapStateParaProps)(Verificacao)
