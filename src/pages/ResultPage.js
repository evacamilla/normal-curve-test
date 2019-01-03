import React, { Component } from 'react';
import ResultAccordion from '../components/ResultAccordion.js';

class ResultPage extends Component {
  state = {
    questionIndex: null
  };

  setQuestionIndex = event => {
    let i = parseInt(event.target.id, 10);

    this.setState({ questionIndex: i });
  };

  hideQuestion = () => {
    this.setState({ questionIndex: null });
  };

  render() {
    return (
      <div className="result-wrapper">
        <div className="white-background">
          <main>
            {this.props.filledInAllAnswers ? (
              //if user filled out all the answers

              <div>
                {this.props.passedTest ? (
                  //if user did pass the test
                  <div>
                    <h1>Total {this.props.totalPoints}</h1>
                    <div className="graph-div">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Standard_deviation_diagram.svg/400px-Standard_deviation_diagram.svg.png"
                        alt="ditt resultat visat i en normalfördelningskurva"
                      />
                      <p>
                        Ovan ser du dina resultat jämfört med normalvärdet av
                        vad andra skattat.
                      </p>
                    </div>

                    <p>
                      För att bli godkäns krävs att du har en diff på mindre
                      eller lika med 2 mer eller mindre än normalvärdet.
                    </p>

                    <hr className="divider" />

                    <h2>Jämför dina resultat</h2>

                    <div className="color-description">
                      <p>Blå siffra = din skattning</p>
                      <p>Grön siffra = normalvärdet</p>
                    </div>

                    {this.props.allaFragor.map((question, i) => {
                      return (
                        <ResultAccordion
                          hideQuestion={this.hideQuestion}
                          allaFragor={this.props.allaFragor}
                          chosenAnswer={question.chosenAnswer}
                          questionIndex={this.state.questionIndex}
                          key={i}
                          i={i}
                          setQuestionIndex={this.setQuestionIndex}
                          question={question.question}
                          number={question.number}
                          heading={question.heading}
                        />
                      );
                    })}
                  </div>
                ) : (
                    //if user did not pass
                    <div>
                      <p>Du är inte godkänd</p>
                    </div>
                  )}
              </div>
            ) : (
                //if user didnt fill out all the answers(came in to page with URL, deny access?)
                //länk tillbaka till kursen
                <div>
                  Du måste göra klart kursen för att kunna se dina resultat
              </div>
              )}
          </main>
          <div className="pink-circle"></div>
        </div>
      </div>
    );
  }
}

export default ResultPage;
