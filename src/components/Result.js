import React, { Component } from 'react';

class Result extends Component {
  state = {
    chapter: 'Resultat'
  };
  
  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  }
  
  render() {
    return (
      <div>
        <h1>Nedstämdhet</h1>
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

export default Result;
