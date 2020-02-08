import React, {Component} from 'react';
import Auxiliar from '../../hoc/Auxiliar'
import classes from './Layout.css'
import BarFerr from '../Navegacao/BarrFerr/BarFerr'
import GavetaLateral from '../Navegacao/GavetaLateral/GavetaLateral'

class Layout extends Component {
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
            <main className={classes.Conteudo}>
                {this.props.children}
            </main>
        </Auxiliar>
       )
    }
}

export default Layout;