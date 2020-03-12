import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Layout from './componentes/Layout/Layout'
import BurgerConstrutor from './containers/BurgerConstrucao/burgerConstrutor'
import Verificacao from './containers/Verificacao/Verificacao'

class App extends Component {
  
    render() {
      return (
        <div>
          <Layout>
             <Switch>
                  <Route path="/verificacao" component={Verificacao}/>
                  <Route path="/" exact component={BurgerConstrutor}/>
             </Switch>
          </Layout>
        </div>
      );
    }
}

export default App;
