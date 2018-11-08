import React, { Component } from 'react';
import Button from './Button.js';
import pdfIcon from '../images/pdf.svg';
import { NavLink } from 'react-router-dom';

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
      <div className="introduction-wrapper">
        <div className="white-background">
          <main>
            <div className="blue-background">
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

            <h2>Instruktioner</h2>
            <p>
              användaren ska skriva ut pdf
              <br />
              video kommer visas <br />
              användaren ska under tiden fylla i frågorna i sitt papper.
              <br />
            </p>

            <div className="pdf-div">
              <img className="pdf-icon" src={pdfIcon} />
              <a href="#">Skriv ut pdf</a>
            </div>

            <NavLink to="/sefilmen">
              <Button text="Starta" className="btn btn-next" />
            </NavLink>
          </main>
        </div>
      </div>
    );
  }
}

export default Introduction;
