import React, { Component } from 'react';
import BtnChangePage from './BtnChangePage.js';
class Question extends Component {
  state = {
    chapter: 'Fyll i dina svar'
  };

  componentWillMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  render() {
    allafragor = [
      {
        heading: 'Nedstämdhet',
        question:
          'Avser uppgift om sänkt grundstämning oavsett om den tar sig uttryck eller ej.  Omfattar känsloravsorgsenhet,olycklighet,hopplöshetochhjälplöshet.  Bedömningenbaseraspåintensitet,varaktighetochi  vilkengradsinnesstäm-ningenpåverkasavyttreomständigheter.Förhöjdsinnesstämningskattas”0”'
      },
      {
        heading: 'Sänkt grundstämming',
        question: 'Avser en sänkning av det emotionella... '
      }
    ];

    return (
      <div>
        <h1>{allafragor[0]}</h1>
        <p>
          Avser en sänkning av det emotionella grundläget (till skillnad från
          situationsutlösta affekter). Omfattar dysterhet, tungsinne och
          nedstämdhet, som manifesterar sig i mimik, kroppshållning och
          rörelsemönster. Bedömningen baseras på utpräglingsgrad och
          avledbarhet. Förhöjd grundstämning.
        </p>
      </div>
    );
  }
}

export default Question;
