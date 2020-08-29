import React, {Component} from 'react'

import Auxiliar from '../../../hoc/Auxiliar'
import Botao from '../../UI/Botao/Botao'


class PedidoSumario extends Component {
    //Isto poderia ser um componente funcional, não tem que ser uma classe
    componentWillUpdate() {
        console.log('[SumarioPedido] WillUpdate')
    }

    render() {
        const sumarioIngredientes = Object.keys(this.props.ingredientes)
                .map(igKey => {
                    return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredientes[igKey]}</li>)
                })

        return (
                <Auxiliar>
                    <h3>Seu Pedido</h3>
                    <p>Um burger delicioso com os seguintes ingredientes : </p>
                    <ul>
                        {sumarioIngredientes}
                    </ul>
                    <p><strong>Preço Total : {this.props.preco.toFixed(2)}</strong></p>
                    <p>Continuar finalização da compra ?</p>
                    <Botao btnType="Perigo" clicado={this.props.compraCancelada}>Cancelar</Botao>
                    <Botao btnType="Sucedido" clicado={this.props.compraContinuada}>Continuar</Botao>
                </Auxiliar>
        )
    }
    
}

export default PedidoSumario;