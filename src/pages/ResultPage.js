import React, {useState} from 'react';
import ResultAccordion from '../components/ResultAccordion.js';

const ResultPage = props => {
  const [questionIndex, setQuestionIndex] = useState(null);

  const showQuestion = event => {
    let i = parseInt(event.target.id, 10);
    setQuestionIndex(i);
  };

  const hideQuestion = () => {
    setQuestionIndex(null);
  };
  return (
    <div className="result-wrapper">
      <div className="white-background">
        <main>
          {props.filledInAllAnswers ? (
            //if user filled out all the answers

            <div>
              {props.passedTest ? (
                //if user did pass the test
                <div className="flex-wrapper">
                  <div className="flex-left">
                    <h1>Ditt resultat</h1>
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
                  </div>

                  <hr className="divider" />

                  <div className="flex-right">
                    <h2>Jämför ditt resultat</h2>

                    <div className="color-description-wrapper">
                      <div className="color-description-div">
                        <div className="small-circle"></div>
                        <p>Blå siffra = din skattning</p>
                      </div>
                      <div className="color-description-div">
                        <div className="small-circle-green"></div>
                        <p>Grön siffra = normalvärdet</p>
                      </div>
                    </div>
                    
                    {props.questions.map((question, i) => {
                      return (
                        <ResultAccordion
                          hideQuestion={hideQuestion}
                          questions={props.questions}
                          chosenAnswer={question.chosenAnswer}
                          questionIndex={questionIndex}
                          key={i}
                          i={i}
                          showQuestion={showQuestion}
                          question={question.question}
                          number={question.number}
                          heading={question.heading}
                        />
                      );
                    })}
                  </div>
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

export default ResultPage;
