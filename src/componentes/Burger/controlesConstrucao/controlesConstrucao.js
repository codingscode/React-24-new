import React from 'react'

import classes from './controlesConstrucao.css'
import ControleConstrucao from './controleConstrucao/controleConstrucao'

const controles = [
    {label: 'Salada', type: 'salada'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Queijo', type: 'queijo'},
    {label: 'Carne', type: 'carne'}
];

const controlesConstrucao = (props) => (
    <div className={classes.controlesConstrucao}>
        <p>Preço atual : <strong>{props.preco.toFixed(2)}</strong> </p>
         {controles.map(controle => (
            <ControleConstrucao key={controle.label} label={controle.label} 
            adicionado={() => props.ingredienteAdicionado(controle.type)} 
            removido={() => props.ingredienteRemovido(controle.type)} 
            desabilitado={props.desabilitado[controle.type]}/>
         ))}
         <button className={classes.botaoPedido} desabilitado={!props.adquirivel}>Solicite agora</button>
    </div>
);

export default controlesConstrucao;


