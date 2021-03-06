import React from 'react';

import './Burger.css';
import IngredientesBurger from './ingredientesBurger/ingredientesBurger'


const burger = (props) => {
  console.log(props)
  let transformIngredientes = Object.keys(props.ingredientes)
     .map(igKey => {
        return [...Array(props.ingredientes[igKey])].map((_, i) => {
           return <IngredientesBurger key={igKey + i} type={igKey}/>
        });
     })
     .reduce((arr, el) => {
        return arr.concat(el)
     }, []);
  if (transformIngredientes.length === 0) {
     transformIngredientes = <p>Comece adicionar ingredientes !</p>
  }
  console.log(transformIngredientes);
  return (
     <div className={'Burger'}>
        <IngredientesBurger type="pao-topo" />
        {transformIngredientes}
        <IngredientesBurger type="pao-fundo" />
     </div>
  );
};

export default burger;   

