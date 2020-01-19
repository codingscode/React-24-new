import React, {Component} from 'react'
import classes from './ingredientesBurger.css'
import PropTypes from 'prop-types'


class IngredientesBurger extends Component {
   render() {
    let ingrediente = null;

    switch (this.props.type) {
      case('pao-fundo'):
        ingrediente = <div className={classes.PaoFundo}></div>;
        break;
      case('pao-topo'):
        ingrediente = (
            <div className={classes.PaoTopo}>
              <div className={classes.Sementes1}></div>
              <div className={classes.Sementes2}></div>
            </div>
        );
        break;
      case('carne'):
        ingrediente = <div className={classes.Carne}></div>;
        break;
      case('queijo'):
        ingrediente = <div className={classes.Queijo}></div>;
        break;
      case('bacon'):
        ingrediente = <div className={classes.Bacon}></div>;
        break;
      case('salada'):
        ingrediente = <div className={classes.Salada}></div>;
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

