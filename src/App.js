import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Introduction from './components/Introduction.js';
import Question from './components/Question.js';
import Result from './components/Result.js';
import Video from './components/Video.js';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

class App extends Component {
  state = {
    toggleMenu: false,
    chapter: 'Introduktion'
  };

  changeChapter = (chapterName) => {
    console.log(chapterName);
    this.setState({chapter: chapterName });

  }

  toggleMenu = () => {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  };

  render() {
    return (
      <div className="App">
        {this.state.toggleMenu ? (
          <div>
            <Menu
              changeChapter={this.changeChapter}
              toggleMenu={this.toggleMenu}
            />
          </div>
        ) : (
          <div>
            <Header toggleMenu={this.toggleMenu} chapter={this.state.chapter} />

            <Switch>
              <Route exact path="/introduktion" component={(props) => <Introduction {...props} changeChapter={this.changeChapter} />} />
        <Route exact path="/sefilmen" component={(props) => <Video {...props} changeChapter={this.changeChapter} />} />
              <Route exact path="/fyllidinasvar" component={(props) => <Question {...props} changeChapter={this.changeChapter} />} />
              <Route exact path="/result" component={(props) => <Result {...props} changeChapter={this.changeChapter} />} />
            </Switch>

            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default App;
