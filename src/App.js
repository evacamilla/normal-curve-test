import React, { Component } from 'react';
import './App.scss';
import Menu from './components/Menu.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Introduction from './components/Introduction.js';
import Question from './components/Question.js';
import Result from './components/Result.js';
import Video from './components/Video.js';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    toggleMenu: false,
    chapter: 'Introduktion',
    filledInAllAnswers: true,
    passedTest: true,
    showWelcome: true,
    allAnswers: [],
    totalPoints: 1454775847364543
  };

  changeChapter = chapterName => {
    //this is for only setting state once
    if (chapterName === this.state.chapter) {
      return;
    } else {
      this.setState({ chapter: chapterName });
    }
  };

  toggleMenu = () => {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  };

  //göra om till mer dynamiska funktioner/ta bort toggleShowElcome
  //om vi ändå behöver ha dom två nedanför
  toggleShowWelcome = () => {
    this.setState({ showWelcome: !this.state.showWelcome });
  };

  showStepOne = () => {
    this.setState({ showWelcome: false });
  };

  showWelcome = () => {
    this.setState({ showWelcome: true });
  };

  sumAllAnswers = () => {
    //ta in alla värden från allAnswers[]. Plussa alla värden. Setstate på statet totalPoints  med totalsumman av allAnswers
    this.state.allAnswers.forEach(function(allAnswer) {
      // Convertera till Int
      console.log('HEj');
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.toggleMenu ? (
          <div>
            <Menu
              changeChapter={this.changeChapter}
              toggleMenu={this.toggleMenu}
              showWelcome={this.showWelcome}
            />
          </div>
        ) : (
          <div>
            <Header toggleMenu={this.toggleMenu} chapter={this.state.chapter} />

            <Switch>
              <Route
                exact
                path="/"
                component={props => (
                  <Introduction
                    {...props}
                    showWelcome={this.state.showWelcome}
                    toggleShowWelcome={this.toggleShowWelcome}
                    changeChapter={this.changeChapter}
                  />
                )}
              />
              <Route
                exact
                path="/introduktion"
                component={props => (
                  <Introduction
                    {...props}
                    showWelcome={this.state.showWelcome}
                    toggleShowWelcome={this.toggleShowWelcome}
                    changeChapter={this.changeChapter}
                  />
                )}
              />
              <Route
                exact
                path="/sefilmen"
                component={props => (
                  <Video
                    {...props}
                    showStepOne={this.showStepOne}
                    changeChapter={this.changeChapter}
                  />
                )}
              />
              <Route
                exact
                path="/fyllidinasvar"
                component={props => (
                  <Question
                    {...props}
                    filledInAllAnswers={this.state.filledInAllAnswers}
                    allAnswers={this.state.allAnswers}
                    changeChapter={this.changeChapter}
                    sumAllAnswers={this.sumAllAnswers}
                  />
                )}
              />
              <Route
                exact
                path="/resultat"
                component={props => (
                  <Result
                    {...props}
                    passedTest={this.state.passedTest}
                    filledInAllAnswers={this.state.filledInAllAnswers}
                    changeChapter={this.changeChapter}
                    totalPoints={this.state.totalPoints}
                  />
                )}
              />
            </Switch>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default App;
