import React from 'react'

import './controleConstrucao.css'

const controleConstrucao = (props) => (
    <div className={'controleConstrucao'}>
        <div className={'Label'}>{props.label}</div>
        <button className={'Menos'} onClick={props.removido} desabilitado={props.desabilitado}>Menos</button>
        <button className={'Mais'} onClick={props.adicionado}>Mais</button>
    </div>
);

export default controleConstrucao;