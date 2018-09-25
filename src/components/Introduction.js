import React, { Component } from 'react';
import Button from './Button.js';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

class Introduction extends Component {
  state = {
    chapter: 'Introduktion'
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  render() {
    // let something = {};
    // if(window.innerWidth < 968) {
    //    something = (
    //     <div>under 768</div>
    //   );
    // }
    // else {
    //     something = (<div>över 768</div>);
    // }

    // return something;

    return (
      <div>
        {this.props.showWelcome ? (
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
            <Button onClick={this.props.toggleShowWelcome} className={'btn btn-next'} text={'Nästa sida'} />
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
            <Button onClick={this.props.toggleShowWelcome} className={'btn btn-prev'} text={'Föregående sida'} />
            
            <button>
              <NavLink
              exact={true}
              to="/sefilmen"
              >
              Nästa sida
              </NavLink>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Introduction;
