import React, {Component} from 'react'

import Auxiliar from '../../hoc/Auxiliar'
import Burger from '../../componentes/Burger/Burger'
import ControlesConstrucao from '../../componentes/Burger/controlesConstrucao/controlesConstrucao'


const PRECOS_INGREDIENTE = {
  salada: 0.5,
  queijo: 0.4,
  carne: 1.3,
  bacon: 0.7
}

class burgerConstrutor extends Component {

    /*
    constructor(props) {
      super(props);
      this.state = {...}
    }
    */

    state = {
      ingredientes: {
        salada: 0,  
        bacon: 0,   
        queijo: 0,  
        carne: 0    
      },
      precoTotal: 4
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
   }

    render() {
        const infoDesabilitada = {
           ...this.state.ingredientes
        };
        for (let key in infoDesabilitada) {
            infoDesabilitada[key] = infoDesabilitada[key] <= 0
        }

        return (
          <Auxiliar>
             <Burger ingredientes={this.state.ingredientes}/>
             <ControlesConstrucao ingredienteAdicionado={this.adicionadorIngrediente}
                  ingredienteRemovido={this.removedorIngrediente}
                  desabilitado={infoDesabilitada}/>
          </Auxiliar>
        )
    }
}

export default burgerConstrutor;
