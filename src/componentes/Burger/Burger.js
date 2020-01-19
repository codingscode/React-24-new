import React from 'react';
import classes from './Burger.css';
import IngredientesBurger from './ingredientesBurger/ingredientesBurger'


const burger = (props) => {
  return (
     <div className={classes.Burger}>
        <IngredientesBurger type="pao-topo" />
        <IngredientesBurger type="queijo" />
        <IngredientesBurger type="carne" />
        <IngredientesBurger type="pao-fundo" />
     </div>
  );
};

export default burger;

