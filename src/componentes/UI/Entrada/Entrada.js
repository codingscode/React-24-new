import React from 'react'

import classes from './Entrada.css'


const entrada = (props) => {
   let elementoEntrada = null
   
   switch (props.tipoElemento) {
       case ('input'):
           elementoEntrada = <input className={classes.elementoEntrada} {...props.configElemento} value={props.valor}/>
           break
       case ('textarea'):
           elementoEntrada = <textarea className={classes.elementoEntrada} {...props.configElemento} value={props.valor}/>
           break
       case ('select'):
           elementoEntrada = (
                  <select className={classes.elementoEntrada} value={props.valor}>
                       {props.configElemento.options.map(cada => (
                           <option value={cada.valor}>
                               {cada.valorMostrado}
                           </option>
                       ))}
                  </select>
                )
           break
       default:
           elementoEntrada = <input className={classes.elementoEntrada} {...props.configElemento} value={props.valor}/>
   }
   
   return (
      <div className={classes.Entrada}>
          <label className={classes.Label}>{props.label}</label>
          {elementoEntrada}
      </div>
   )
}

export default entrada