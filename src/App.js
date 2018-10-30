import React, { Component } from 'react';
import './App.scss';
import Menu from './components/Menu.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Introduction from './components/Introduction.js';
import Question from './components/Question.js';
import Result from './components/Result.js';
import Video from './components/Video.js';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  state = {
    chapter: 'Introduktion',
    filledInAllAnswers: true,
    passedTest: true,
    allAnswers: [],
    totalPoints: 0
  };

  changeChapter = chapterName => {
    //this is for only setting state once
    if (chapterName === this.state.chapter) {
      return;
    } else {
      this.setState({ chapter: chapterName });
    }
  };

  sumAllAnswers = () => {
    let sum = 0;

    this.state.allAnswers.forEach(function(answer) {
      answer = parseInt(answer, 10);
      sum += answer;
    });

    this.setState({totalPoints: sum});
    return <Redirect to="/resultat" from="/" />;
  }

  render() {
    return (
      <div>
            <Header chapter={this.state.chapter} />
            <Switch>
              <Route 
                exact
                path="/"
                component={props => (
                  <Introduction
                    {...props}
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
    );
  }
}

export default App;
