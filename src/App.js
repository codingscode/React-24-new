import React, {Component} from 'react';
import Layout from './componentes/Layout/Layout'
import BurgerConstrutor from './containers/BurgerConstrucao/burgerConstrutor'


class App extends Component {
  

    render() {
      return (
        <div>
          <Layout>
             <BurgerConstrutor/>
          </Layout>
        </div>
      );
    }
}

export default App;
