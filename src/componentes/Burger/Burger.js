import React from 'react';
import classes from './Burger.css';
import IngredientesBurger from './ingredientesBurger/ingredientesBurger'


const burger = (props) => {
  const transformIngredientes = Object.keys(props.ingredientes)
     .map(igKey => {
        return [...Array(props.ingredientes[igKey])].map((_, i) => {
           return <IngredientesBurger key={igKey + i} type={igKey}/>
        });
     });
  return (
     <div className={classes.Burger}>
        <IngredientesBurger type="pao-topo" />
        {transformIngredientes}
        <IngredientesBurger type="pao-fundo" />
     </div>
  );
};

export default burger;

