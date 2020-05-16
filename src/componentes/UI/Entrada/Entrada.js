import React from 'react'

import classes from './Entrada.css'


const entrada = (props) => {
   let elementoEntrada = null
   
   switch (props.inputtype) {
       case ('input'):
           elementoEntrada = <input className={classes.elementoEntrada} {...props}/>
           break
       case ('textarea'):
           elementoEntrada = <textarea className={classes.elementoEntrada} {...props}/>
           break
       default:
           elementoEntrada = <input className={classes.elementoEntrada} {...props}/>
   }
   
   return (
      <div className={classes.Entrada}>
          <label className={classes.Label}>{props.label}</label>
          {elementoEntrada}
      </div>
   )
}

export default entrada