import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Home';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {Navigationbar} from './components/Navbar'

class App extends Component {
  render(){
      return (
          <React.Fragment>
            <Navigationbar/>
              <Layout>
                <Router>
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route component={NoMatch}/>
                  </Switch>
                </Router>
              </Layout>
          </React.Fragment>
      );
    
  }
}

export default App;
