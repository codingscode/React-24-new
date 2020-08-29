import React from 'react'

import './Botao.css'

const botao = ({btnType, clicado, desabilitado, children}) => (
     <button className={['Botao', [btnType]].join(' ')} onClick={clicado} disabled={desabilitado}>
             {children}
     </button>
)

export default botao;