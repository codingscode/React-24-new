import React from 'react';
import Auxiliar from '../../hoc/Auxiliar'
import classes from './Layout.css'
import BarFerr from '../Navegacao/BarrFerr/BarFerr'

const layout = (props) => (
  <Auxiliar>
    <BarFerr/>
    <main className={classes.Conteudo}>
        {props.children}
    </main>
  </Auxiliar>  
);

export default layout;