import React from "react";
import pdfIcon from '../images/pdf.svg';
import introImg from '../images/intro_img.svg.png';
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


            <div className="img-wrapper">
              <img className="intro-img" src={introImg} />
            </div>
          </div>

          <hr />

          <div className="instructions-wrapper">
            <div className="instructions-text">
              <h2>Instruktioner</h2>
              <p>
                Användaren ska skriva ut pdf
                <br />
                Video kommer visas <br />
                Användaren ska under tiden fylla i frågorna i sitt papper.
                <br />
              </p>
            </div>

            <div className="pdf-wrapper">
              <img className="pdf-icon" src={pdfIcon} />
              <a href="#">Skriv ut pdf</a>
            </div>
          </div>

        </main>

        <div className="pink-circle"></div>
      </div>

      <div className="btn-wrapper">
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
