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
         {controles.map(controle => (
            <ControleConstrucao key={controle.label} label={controle.label}/>
         ))}
    </div>
);

export default controlesConstrucao;

