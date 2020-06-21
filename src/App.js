import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Home';
import {Contas} from './Contas'
import {NoMatch} from './NoMatch';
import {Perfil} from './Perfil';
import {CadForm} from './Cadastrar';
import {Principal} from './Principal';
import {ContaDetalhe} from './ContaDetalhe';
import {Categorias} from './Categoria'
import {Layout} from './components/Layout';
import {Navigationbar} from './components/Navbar';

class App extends Component {

  render(){
      return (
          <React.Fragment>
            <Navigationbar/>
              <Layout>
                <Router>
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Cadastrar" component={CadForm}/>
                    <Route exact path="/Contas" component={Contas}/>
                    <Route exact path="/Perfil" component={Perfil}/>
                    <Route exact path="/Principal" component={Principal}/>
                    <Route exact path="/Categorias" component={Categorias}/>
                    <Route exact path="/Contas/ContaDetalhe" component={ContaDetalhe}/>
                    <Route component={NoMatch}/>
                  </Switch>
                </Router>
                
              </Layout>
          </React.Fragment>
      );
    
  }
}

export default App;
