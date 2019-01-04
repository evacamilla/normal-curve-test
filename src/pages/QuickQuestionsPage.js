import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ToggleQuestionView from '../components/ToggleQuestionView';
import BtnSubmitTest from '../components/BtnSubmitTest';
import Video from '../components/Video';

class QuickQuestionsPage extends Component {
  state = {
    questionIndex: null
  };

  setQuestion = event => {
    let i = parseInt(event.target.id, 10);

    this.setState({ questionIndex: i });
  };

  temporaryAnswerQuick = event => {
    //Store chosen answer(event.target.id) in an questions.chosenAnswer in App.js state using question index as key value
    this.props.questions[this.state.questionIndex].chosenAnswer =
      event.target.value;
    //this.props.allAnswers[this.state.questionIndex] = event.target.value;
  };

  render() {
    let optionItems = [];
    for (let i = 0; i <= 6; i++) {
      optionItems.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return (
      <div className="question-wrapper">
        <div className="white-background">
          <main>
            <div className="flex-wrapper">
            <div className="flex-left">
              <Video />
            </div>

              <div>
                <div className="toggle-flex">
                  <div className="toggle-link-wrapper">
                    <Link
                      to="/fyllidinasvar"
                    >
                    <ToggleQuestionView
                      toggleBooleon={false}
                    />
                    </Link>
                    </div>
                  </div>

                <form onChange={this.temporaryAnswerQuick}>
                  {this.props.questions.map((question, i) => {
                    return (
                      <div key={i}>
                        <select id={i} onClick={this.setQuestion}>
                          <option value="" hidden>
                            {question.heading}
                          </option>
                          {optionItems}
                        </select>
                      </div>
                    );
                  })}
                </form>
              </div>
            </div>
          </main>
        </div>

        <div className="btn-wrapper">
          <div className="btn-prev-div">
            <Link to="/introduktion">Tillbaka</Link>
          </div>

          <div className="btn-center-wrapper">
            <BtnSubmitTest
              filledInAllAnswers={this.props.filledInAllAnswers}
              passedTest={this.props.passedTest}
              sumAllAnswers={this.props.sumAllAnswers}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default QuickQuestionsPage;
