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
import * as acaoTipos from '../../store/acoes'


const PRECOS_INGREDIENTE = {
  salada: 0.5,
  queijo: 0.4,
  carne: 1.3,
  bacon: 0.7
}

class burgerConstrutor extends Component {
    /*global *, state, adicionadorIngrediente, removedorIngrediente, gerenAdquirir, gerencancelarAdquirir, gerencontinuarAdquirir*/
    /*eslint no-undef: "error"*/
    state = {
      precoTotal: 4,
      adquirivel: false,
      adquirindo: false,
      carregando: false,
      erro: false
    }
    
    componentDidMount () {
      console.log(this.props)
      /* axios.get('https://react-meu-burger.firebaseio.com/ingredientes.json')
         .then(resposta => {
            this.setState({ingredientes: resposta.data})
         })
         .catch(erro => {
             this.setState({erro: true})
         }) */
    }

    atualizarEstadoAdquirir (ingredientes) {
        const soma = Object.keys(ingredientes)
          .map(igKey => {
              return ingredientes[igKey]
          })
          .reduce((soma, el) => {
              return soma + el;
          }, 0);
        this.setState({adquirivel: soma > 0})
    }

    adicionadorIngrediente = (type) => {
      const previoContad = this.state.ingredientes[type];
      const atualizadoContad = previoContad + 1;
      const ingredientesAtualizados = {
         ...this.state.ingredientes
      };
      ingredientesAtualizados[type] = atualizadoContad
      const adicaoPreco = PRECOS_INGREDIENTE[type]
      const previoPreco = this.state.precoTotal;
      const novoPreco = previoPreco + adicaoPreco;
      this.setState({precoTotal: novoPreco, ingredientes: ingredientesAtualizados});
      this.atualizarEstadoAdquirir(ingredientesAtualizados)
   }
   
   removedorIngrediente = (type) => {
      const previoContad = this.state.ingredientes[type];
      if (previoContad <= 0) {
        return;
      }
      const atualizadoContad = previoContad - 1;
      const ingredientesAtualizados = {
        ...this.state.ingredientes
      };
      ingredientesAtualizados[type] = atualizadoContad
      const deducaoPreco = PRECOS_INGREDIENTE[type]
      const previoPreco = this.state.precoTotal;
      const novoPreco = previoPreco - deducaoPreco;
      this.setState({precoTotal: novoPreco, ingredientes: ingredientesAtualizados});
      this.atualizarEstadoAdquirir(ingredientesAtualizados)
   }

    gerenAdquirir = () => {
        this.setState({adquirindo: true});
    }

    gerencancelarAdquirir = () => {
        this.setState({adquirindo: false});
    }

    gerencontinuarAdquirir = () => {
        
        const parametrosConsulta = []
        for (let i in this.state.ingredientes) {
             parametrosConsulta.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredientes[i]))
        }
        parametrosConsulta.push('preco=' + this.state.precoTotal)
        const stringConsulta = parametrosConsulta.join('&')
 
        this.props.history.push({
            pathname: '/verificacao',
            search: '?' + stringConsulta
        })
    }

    render() {
        const infoDesabilitada = {
           ...this.props.meus_ings
        };
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
                      adquirivel={this.state.adquirivel}
                      preco={this.state.precoTotal}
                      ordenado={this.gerenAdquirir}/>
              </Auxiliar>
           );
           sumarioPedido = <SumarioPedido ingredientes={this.props.meus_ings} 
                                compraCancelada={this.gerencancelarAdquirir}
                                compraContinuada={this.gerencontinuarAdquirir}
                                preco={this.state.precoTotal}/>
        }
        if(this.state.carregando) {
            sumarioPedido = <Rodador />
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
      meus_ings: state.ingredientes
    }
}

const mapDispatchParaProps = dispatch_func => {
    return {
      emIngredienteAdicionado: (nomeIng) => dispatch_func({type: acaoTipos.ADIC_INGREDIENTE, nomeIngrediente: nomeIng}),
      emIngredienteRemovido: (nomeIng) => dispatch_func({type: acaoTipos.REMOV_INGREDIENTE, nomeIngrediente: nomeIng})
    }
}


export default connect(mapStateParaProps, mapDispatchParaProps)(GerenComErro(burgerConstrutor, axios))
