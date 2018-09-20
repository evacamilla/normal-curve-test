import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Introduction from './components/Introduction.js';
import Question from './components/Question.js';
import { BrowserRouter, 
  Route, Switch, NavLink } from 'react-router-dom'

class App extends Component {
  state = {
    toggleMenu: false,
    category: "Introduktion"
  }

  toggleMenu = () => {
    this.setState({toggleMenu: !this.state.toggleMenu});
  }

  render() {
    return (
      <div className="App">
      {this.state.toggleMenu ? 
        <div>
          <Menu toggleMenu={this.toggleMenu} />
        </div> 
        : 
        <div>
          <Header toggleMenu={this.toggleMenu} category={this.state.category}/>
          
            <Switch>
              <Route exact path="/" component={Introduction} />
              <Route exact path="/introduktion" component={Introduction} />
              <Route exact path="/sefilmen" component={Footer} />
              <Route exact path="/svarapadinafragor" component={Question} />
              <Route exact path="/resultat" component={Footer} />
            </Switch>

            <Footer />
          </div>
      }
        

      </div>
    );
  }
}

export default App;