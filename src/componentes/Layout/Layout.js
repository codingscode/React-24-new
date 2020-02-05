import React from 'react';
import Auxiliar from '../../hoc/Auxiliar'
import classes from './Layout.css'
import BarFerr from '../Navegacao/BarrFerr/BarFerr'
import GavetaLateral from '../Navegacao/GavetaLateral/GavetaLateral'

const layout = (props) => (
  <Auxiliar>
    <BarFerr/>
    <GavetaLateral />
    <main className={classes.Conteudo}>
        {props.children}
    </main>
  </Auxiliar>  
);

export default layout;