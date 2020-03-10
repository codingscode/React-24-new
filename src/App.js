import React, {Component} from 'react';
import Layout from './componentes/Layout/Layout'
import BurgerConstrutor from './containers/BurgerConstrucao/burgerConstrutor'
import Verificacao from './containers/Verificacao/Verificacao'

class App extends Component {
  
    render() {
      return (
        <div>
          <Layout>
             <BurgerConstrutor/>
             <Verificacao />
          </Layout>
        </div>
      );
    }
}

export default App;
