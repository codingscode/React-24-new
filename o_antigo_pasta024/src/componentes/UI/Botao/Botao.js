import React from 'react'

import classes from './Botao.css'

const botao = (props) => (
     <button className={[classes.Botao, classes[props.btnType]].join(' ')} onClick={props.clicado} disabled={props.desabilitado}>
             {props.children}
     </button>
)

export default botao;