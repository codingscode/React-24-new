import React, {Component} from 'react'

import Pedido from '../../componentes/Pedido/Pedido'
import axios from '../../axios-pedidos'
import GerenComErro from '../../hoc/GerenComErro/GerenComErro'

class Pedidos extends Component {
    state = {
        pedidos: [],
        carregando: true
     }
     
     componentDidMount() {
        axios.get('/pedidos.json')
           .then(res => {
               const pedidosBuscados = []
               for (let chave in res.data) {
                  pedidosBuscados.push({
                     ...res.data[chave],
                     id: chave
                  })
               }
               this.setState({carregando: false, pedidos: pedidosBuscados})         
           })
           .catch(erro => {
               this.setState({carregando: false})
           })
     }

    render() {
        return (
            <div>
                {this.state.pedidos.map(pedido => (
                     <Pedido key={pedido.id} ingredientes={pedido.ingredientes} preco={pedido.preco} />
                ))}
            </div>
        )
    }
}

export default GerenComErro(Pedidos, axios)