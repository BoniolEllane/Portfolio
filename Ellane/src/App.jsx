
import React, { useState, useRef } from 'react';
import { ReactTyped } from "react-typed";
import './index.css';
import image from '/src/assets/placeholder1.png';
import ux1 from '/src/assets/ux.png';
import { PiFacebookLogoThin, PiLinkedinLogoThin, PiPhoneThin } from "react-icons/pi";
import { FaHtml5, FaBootstrap } from "react-icons/fa";

const App = () => {
  const [clickedCard, setClickedCard] = useState(null);

  const handleCardClick = (index) => {
    setClickedCard(clickedCard === index ? null : index); // Toggle the clicked card
  };
  const descriptions = [
    'This project involved designing a user-friendly interface for the TUP Manila website.',
    'A collaborative effort to connect job seekers and employers at the Fil-Chi Job Fair 2024.',
    'Designed a clean and modern website for ClearPath, focusing on user experience.',
    'Developed a text-based adventure game titled "The Writhing Labyrinth."',
    'Currently working on the Ongpin Tower website, enhancing its online presence.'
  ];


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
                    <p>{descriptions[index]}</p>
                    <button>Learn More</button>
                  </div>
                </div>
              ))}
          </div>
        </section>

        <section className="skills">
          <div className="col">
            <div className="skill_col1">
              <h1>LANGUAGES:</h1>
              <ul>
                <li>Bootstrap</li>
                <li>C++</li>
              </ul>
              BOOTSTRAP
              C C++ C# JAVASCRIPT
              HTML
              REACTJS
              CSS
              FIGMA, Tailwind
            </div>
            <div className="skill_col2">
              Skills and Dev Tools
              WordPress, Figma, Frontend Design, Frontend Development, Website Development, Networking, Game Design
              Github, VSCode, Unity, Jupiter, PyCharm
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
