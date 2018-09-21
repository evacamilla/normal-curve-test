import React, { Component } from 'react';
import BtnChangePage from './BtnChangePage.js';
class Introduction extends Component {
  state = {
    showWelcome: true,
    chapter: 'Introduktion'
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  previousPage = () => {
    console.log('prev from INTRODUCTION');
  };

  nextPage = () => {
    console.log('next from INTRODUCTION');
  };

  render() {
    return (
      <div>
        {this.state.showWelcome ? (
          <div>
            <h1>Välkommen!</h1>
            <p>
              Här är en kortare text om vad själva kursen går ut på.
              <br />
              (Vem den riktar sig till?)
              <br />
              Eventuellt en illustration för stämningens skull, passar
              målgruppen eller ej?
              <br />
            </p>
          </div>
        ) : (
          <div>
            <h1>Steg 1</h1>
            <p>
              Instruktioner om steg 1. <br />- användaren ska skriva ut pdf{' '}
              <br />
              video kommer visas <br />
              användaren ska under tiden fylla i frågorna i sitt papper.
              <br />
              Skriv ut: En bild på pdf med textad länk Texten kan "flyta" med
              bilden
            </p>
          </div>
        )}
        <BtnChangePage
          previousPage={this.previousPage}
          nextPage={this.nextPage}
        />
      </div>
    );
  }
}

export default Introduction;
