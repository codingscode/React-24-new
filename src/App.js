import React, {Component} from 'react';
import Layout from './componentes/Layout/Layout'
import BurgerConstrutor from './containers/BurgerConstrucao/burgerConstrutor'


class App extends Component {
  state = {
     mostrar: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({mostrar: false})
    }, 5000)
  }

    render() {
      return (
        <div>
          <Layout>
            {this.state.mostrar ? <BurgerConstrutor/> : null}
          </Layout>
        </div>
      );
    }
}

export default App;
