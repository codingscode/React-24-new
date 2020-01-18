import React from 'react';
import Auxiliar from '../../hoc/Auxiliar'
import classes from './Layout.css'


const layout = (props) => (
  <Auxiliar>
  <div>Toolbar, SideDrawer, Backdrop</div>
  <main className={classes.Conteudo}>
      {props.children}
  </main>
  </Auxiliar>  
);

export default layout;