import React from 'react'

import classes from './controleConstrucao.css'

const controleConstrucao = (props) => (
    <div className={classes.controleConstrucao}>
        <div className={classes.Label}>{props.label}</div>
        <div className={classes.Menos}>Menos</div>
        <div className={classes.Mais}>Mais</div>
    </div>
);

export default controleConstrucao;