
import React, { useState, useRef } from 'react';
import { ReactTyped } from "react-typed";
import './index.css';
import image from '/src/assets/placeholder1.png';
import ux1 from '/src/assets/ux.png';
import { PiFacebookLogoThin, PiLinkedinLogoThin, PiPhoneThin } from "react-icons/pi";

const App = () => {
  const [clickedCard, setClickedCard] = useState(null);

  const handleCardClick = (index) => {
    setClickedCard(clickedCard === index ? null : index); // Toggle the clicked card
  };



  return (
    <>
      <div>
        <section className="hero">
          <div className="col">
            <div className="row_info">
              <p>PORTFOLIO</p>
              <div className="type">
                <h1>
                  I am Ellane, <br /> {" "}
                  <ReactTyped
                    strings={["a Frontend Dev", "an IT Specialist", "a Web Developer"]}
                    typeSpeed={150}
                    loop
                    backSpeed={50}
                    cursorChar="|"
                    showCursor={true}
                  />
                </h1>
              </div>
              <h5>A passionate blabla</h5>
              <a href="/src/assets/Boniol_Resume.pdf" download="Boniol_Resume.pdf">
              <button id="btn" ><b>DOWNLOAD RESUME</b></button>
              </a>
            </div>
            <div className="profile_image">
              <img src={image} alt="" />
            </div>
            <div className="row_social">
              <div className="icon" id='facebook'>
                <a href="https://www.facebook.com/llanell29"><PiFacebookLogoThin /></a>
                </div>
              <div className="icon" id='Linkedin'>
              <a href="https://www.linkedin.com/in/ellaneboniol/"><PiLinkedinLogoThin /></a>
              </div>
              <div className="icon" id='phone'>
              <a href="tel:+639358784136"><PiPhoneThin /></a></div>
            </div>
          </div>
        </section>

        <section className="projects-slide-contain">
          <div className="proj-heading">
            <h2>PREVIOUS WORKS</h2>
            <p>These projects were.... Click the cards to show more details.</p>
          </div>

          <hr />
          <div className="project-card">
            {['Collaborative Design for UX/UI TUP Manila Website',
              'Collaborative Work for Fil-Chi Job Fair 2024', 'ClearPath Website Design', 
              'The Writhing Labyrinth: A Wumpus Game', 'Ongpin Tower Website: On Progress'].map((title, index) => (
                <div
                  key={index}
                  className={`card ${clickedCard === index ? 'active' : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="img-card">
                    <img src={ux1} alt={title} />
                  </div>
                  <div className="colcard">
                    <h3>{title}</h3>
                    <p>Blabla</p>
                    <button>Learn More</button>
                  </div>
                </div>
              ))}
          </div>
          <div className="project-card">
            {['Collaborative Design for UX/UI TUP Manila Website',
              'Collaborative Work for Fil-Chi Job Fair 2024', 'ClearPath Website Design', 
              'The Writhing Labyrinth: A Wumpus Game', 'Ongpin Tower Website: On Progress'].map((title, index) => (
                <div
                  key={index}
                  className={`card ${clickedCard === index ? 'active' : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="img-card">
                    <img src={ux1} alt={title} />
                  </div>
                  <div className="colcard">
                    <h3>{title}</h3>
                    <p>Blabla</p>
                    <button>Learn More</button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
