import React, {Component} from 'react';
import Auxiliar from '../../hoc/Auxiliar'
import './Layout.css'
import BarFerr from '../Navegacao/BarrFerr/BarFerr'
import GavetaLateral from '../Navegacao/GavetaLateral/GavetaLateral'

class Layout extends Component {
    /*global state, gerengavetaLateralFechado, gerenGavetaToggle */
    /*eslint no-undef: "error"*/
    state = {
        mostrarGavetaLateral: false
    }
    
    gerengavetaLateralFechado = () => {
        this.setState({mostrarGavetaLateral: false})
    }

    gerenGavetaToggle = () => {
        this.setState((prevState) => {
            return {mostrarGavetaLateral: !prevState.mostrarGavetaLateral}
        })
    }

    render() {
       return (
        <Auxiliar>
            <BarFerr gavetaToggleClicado={this.gerenGavetaToggle}/>
            <GavetaLateral aberto={this.state.mostrarGavetaLateral} fechado={this.gerengavetaLateralFechado}/>
            <main className={'Conteudo'}>
                {this.props.children}
            </main>
        </Auxiliar>
       )
    }
}

export default Layout;