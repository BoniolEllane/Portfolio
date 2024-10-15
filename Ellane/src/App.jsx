import React, { useState } from 'react';
import image from '/src/assets/placeholder1.png';
import ux1 from '/src/assets/ux.png';
import { PiFacebookLogoThin, PiLinkedinLogoThin, PiPhoneThin } from "react-icons/pi";

function App() {
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
              <h1>CAROUSEL: FW / IT SPEC</h1>
              <h5>A passionate blabla</h5>
              <button id="btn"><b>DOWNLOAD RESUME</b></button>
            </div>
            <div className="profile_image">
              <img src={image} alt="" />
            </div>
            <div className="row_social">
              <div className="icon" id='facebook'><PiFacebookLogoThin /></div>
              <div className="icon" id='Linkedin'><PiLinkedinLogoThin /></div>
              <div className="icon" id='phone'><PiPhoneThin /></div>
            </div>
          </div>
        </section>

        <section className="projects-slide-contain">
          <h2>PREVIOUS WORKS</h2>
          <p>Blablablabla</p>
          <hr />
          <div className="project-card">
            {['Collaborative Design for UX/UI TUP Manila Website', 'Collaborative Work for Fil-Chi Job Fair 2024', 'ClearPath Website Design', 'The Writhing Labyrinth: A Wumpus Game', 'Ongpin Tower Website: On Progress'].map((title, index) => (
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
