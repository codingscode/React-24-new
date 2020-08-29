import React from 'react'

import classes from './controleConstrucao.css'

const controleConstrucao = (props) => (
    <div className={classes.controleConstrucao}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Menos} onClick={props.removido} desabilitado={props.desabilitado}>Menos</button>
        <button className={classes.Mais} onClick={props.adicionado}>Mais</button>
    </div>
);

export default controleConstrucao;