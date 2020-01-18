import React from 'react';
import Layout from './componentes/Layout/Layout'
import BurgerConstrutor from './containers/BurgerConstrucao/burgerConstrutor'


function App() {
  return (
    <div>
      <Layout>
        <BurgerConstrutor/>
      </Layout>
    </div>
  );
}

export default App;
