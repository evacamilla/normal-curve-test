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

          <div className="instructions-wrapper">
            <div className="instructions-text">
              <h2>Instruktioner</h2>
              <p>
                användaren ska skriva ut pdf
                <br />
                video kommer visas <br />
                användaren ska under tiden fylla i frågorna i sitt papper.
                <br />
              </p>
            </div>

            <div className="pdf-wrapper">
              <img className="pdf-icon" src={pdfIcon} />
              <a href="#">Skriv ut pdf</a>
            </div>
          </div>
        </main>
        
      </div>
      
      <div class="btn-wrapper">
        <div className="btn-center-wrapper">
            <NavLink to="/fyllidinasvar">
              <div className="btn btn-next">
                Starta
              </div>
            </NavLink>
        </div>
      </div>
    </div>
  );
}

export default IntroductionPage;
