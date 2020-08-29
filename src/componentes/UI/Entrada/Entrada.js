import React from 'react'

import './Entrada.css'


const entrada = (props) => {
   let elementoEntrada = null
   const classesEntrada = ['elementoEntrada']

   if (props.invalido && props.deveValidar && props.tocado) {
       classesEntrada.push('Invalido')
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
      <div className={'Entrada'}>
          <label className={'Label'}>{props.label}</label>
          {elementoEntrada}
      </div>
   )
}

export default entrada