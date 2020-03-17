import React, {Component} from 'react'

import Pedido from '../../componentes/Pedido/Pedido'

class Pedidos extends Component {
    render() {
        return (
            <div>
                <Pedido />
                <Pedido />
            </div>
        )
    }
}

export default Pedidos