/*eslint no-undef: "error"*/
import React, {Component} from 'react'
import { connect } from 'react-redux'

import Auxiliar from '../../hoc/Auxiliar'
import Burger from '../../componentes/Burger/Burger'
import ControlesConstrucao from '../../componentes/Burger/controlesConstrucao/controlesConstrucao'
import Modal from '../../componentes/UI/Modal/Modal'
import SumarioPedido from '../../componentes/Burger/SumarioPedido/SumarioPedido'
import Rodador from '../../componentes/UI/Rodador/Rodador'
import GerenComErro from '../../hoc/GerenComErro/GerenComErro'
import axios from '../../axios-pedidos'
import * as construtorBurgerActions from '../../store/actions/index'




class burgerConstrutor extends Component {
    /*global *, state, adicionadorIngrediente, removedorIngrediente, gerenAdquirir, gerencancelarAdquirir, gerencontinuarAdquirir*/
    /*eslint no-undef: "error"*/
    state = {
      adquirindo: false
    }
    
    componentDidMount () {
      console.log(this.props)
      
    }

    atualizarEstadoAdquirir (ingredientes) {
        const soma = Object.keys(ingredientes)
          .map(igKey => {
              return ingredientes[igKey]
          })
          .reduce((soma, el) => {
              return soma + el
          }, 0)
        return soma > 0
    }

    gerenAdquirir = () => {
        this.setState({adquirindo: true});
    }

    gerencancelarAdquirir = () => {
        this.setState({adquirindo: false});
    }

    gerencontinuarAdquirir = () => {
        
        /* const parametrosConsulta = []
        for (let i in this.state.ingredientes) {
             parametrosConsulta.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredientes[i]))
        }
        parametrosConsulta.push('preco=' + this.state.precoTotal)
        const stringConsulta = parametrosConsulta.join('&') */
 
        this.props.history.push('/verificacao')
    }

    render() {
        const infoDesabilitada = {
           ...this.props.meus_ings
        }
        for (let key in infoDesabilitada) {
            infoDesabilitada[key] = infoDesabilitada[key] <= 0
        }

        let sumarioPedido = null
        
        let burger = this.state.erro ? <p>Ingredientes não podem ser carregados</p> : <Rodador />

        if (this.props.meus_ings) {
            burger = (
              <Auxiliar>
                  <Burger ingredientes={this.props.meus_ings}/>
                  <ControlesConstrucao ingredienteAdicionado={this.props.emIngredienteAdicionado}
                      ingredienteRemovido={this.props.emIngredienteRemovido}
                      desabilitado={infoDesabilitada}
                      adquirivel={this.atualizarEstadoAdquirir(this.props.meus_ings)}
                      preco={this.props.preco}
                      ordenado={this.gerenAdquirir}/>
              </Auxiliar>
           );
           sumarioPedido = <SumarioPedido ingredientes={this.props.meus_ings} 
                                compraCancelada={this.gerencancelarAdquirir}
                                compraContinuada={this.gerencontinuarAdquirir}
                                preco={this.props.preco}/>
        }
        

        return (
          <Auxiliar>
             <Modal show={this.state.adquirindo} modalFechado={this.gerencancelarAdquirir}>
                 {sumarioPedido}
             </Modal>
             {burger}
          </Auxiliar>
        )
    }
}

const mapStateParaProps = state => {
    return {
        meus_ings: state.ingredientes,
        preco: state.precoTotal
    }
}

const mapDispatchParaProps = dispatch_func => {
    return {
      emIngredienteAdicionado: (nomeIng) => dispatch_func(construtorBurgerActions.adicIngrediente(nomeIng) ),
      emIngredienteRemovido: (nomeIng) => dispatch_func(construtorBurgerActions.removIngrediente(nomeIng))
    }
}


export default connect(mapStateParaProps, mapDispatchParaProps)(GerenComErro(burgerConstrutor, axios))
