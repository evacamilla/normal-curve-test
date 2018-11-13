import React, { Component } from 'react';
import Button from './Button.js';
import pdfIcon from '../images/pdf.svg';
import { NavLink } from 'react-router-dom';

function IntroductionPage() {
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

            <div className="pdf-wrapper">
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

export default IntroductionPage;
