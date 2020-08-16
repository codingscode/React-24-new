import React from 'react'

import classes from './Entrada.css'


const entrada = (props) => {
   let elementoEntrada = null
   const classesEntrada = [classes.elementoEntrada]

   if (props.invalido && props.deveValidar) {
       classesEntrada.push(classes.Invalido)
   }
   
   switch (props.tipoElemento) {
       case ('input'):
           elementoEntrada = <input className={classesEntrada.join(' ')} {...props.configElemento} value={props.valor} onChange={props.mudanca}/>
           break
       case ('textarea'):
           elementoEntrada = <textarea className={classesEntrada.join(' ')} {...props.configElemento} value={props.valor} onChange={props.mudanca}/>
           break
       case ('select'):
           elementoEntrada = (
                  <select className={classesEntrada.join(' ')} value={props.valor} onChange={props.mudanca}>
                       {props.configElemento.options.map(cada => (
                           <option key={cada.valor} value={cada.valor}>
                               {cada.valorMostrado}
                           </option>
                       ))}
                  </select>
                )
           break
       default:
           elementoEntrada = <input className={classesEntrada.join(' ')} {...props.configElemento} value={props.valor}
                   onChange={props.mudanca}/>
   }
   
   return (
      <div className={classes.Entrada}>
          <label className={classes.Label}>{props.label}</label>
          {elementoEntrada}
      </div>
   )
}

export default entrada