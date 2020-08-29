import React, {Component} from 'react'
import './ingredientesBurger.css'
import PropTypes from 'prop-types'


class IngredientesBurger extends Component {
   render() {
    let ingrediente = null;

    switch (this.props.type) {
      case('pao-fundo'):
        ingrediente = <div className={'PaoFundo'}></div>;
        break;
      case('pao-topo'):
        ingrediente = (
            <div className={'PaoTopo'}>
              <div className={'Sementes1'}></div>
              <div className={'Sementes2'}></div>
            </div>
        );
        break;
      case('carne'):
        ingrediente = <div className={'Carne'}></div>;
        break;
      case('queijo'):
        ingrediente = <div className={'Queijo'}></div>;
        break;
      case('bacon'):
        ingrediente = <div className={'Bacon'}></div>;
        break;
      case('salada'):
        ingrediente = <div className={'Salada'}></div>;
        break;
      default:
        ingrediente = null;
    }

    return ingrediente;
   }

}

IngredientesBurger.propTypes = {
  type:PropTypes.string.isRequired
};

export default IngredientesBurger;

