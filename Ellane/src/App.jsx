
import React, { useState } from 'react';
import { ReactTyped } from "react-typed";
import './index.css';
import image from '/src/assets/placeholder1.png';
import ux1 from '/src/assets/ux.png';
import { PiLinkedinLogoThin, PiPhoneThin } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import Marquee from "react-fast-marquee";



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
      <div className='Main'>
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
                <a href="https://github.com/BoniolEllane"><FaGithub /></a>
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
              <h1>TECHNICAL SKILLS:</h1>
              <div className="lang">
                <h3>Website Development</h3>
              </div>
              <div className="lang">
                <h3>Website Designing</h3>
              </div>
              <div className="lang">
                <h3>Frontend Development</h3>
              </div>
              <div className="lang">
                <h3>Frontend Design</h3>
              </div>
              <div className="lang">
                <h3>Networking</h3>
              </div>
              <div className="lang">
                <h3>Game Design</h3>
              </div>
              <div className="lang">
                <h3>UX/UI Design</h3>
              </div>
              <div className="lang">
                <h3>Troubleshooting Skills</h3>
              </div>
              <div className="lang">
                <h3>Systems Assessment</h3>
              </div>

            </div>
            <div className="skill_col2">
              <h1>CORE COMPETENCIES:</h1>
              <div className="lang">
                <h3>Effective in communication</h3>
              </div>
              <div className="lang">
                <h3>Evaluative Thinking Skills</h3>
              </div>
              <div className="lang">
                <h3>Highly motivated and proactive</h3>
              </div>
              <div className="lang">
                <h3>Strong time management</h3>
              </div>
            </div>
          </div>
          <div className="skills-marquee">
          <h3>LANGUANGES:</h3>
            <Marquee
              autoFill={false}
              pauseOnHover={true}
              speed={100}
              gradient={false}
              direction={"right"}
              style={{
                marginBottom:'5em',
              }}
            >
              <div className="technical_marquee">

                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" alt="Bootstrap Icon" />
                  BOOTSTRAP
                </div>

                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=shQTXiDQiQVR&format=png&color=000000" alt="C Icon" />
                  C LANGUAGE
                </div>

                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=40669&format=png&color=000000" alt="C++ Icon" />
                  C++ LANGUAGE
                </div>

                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=55251&format=png&color=000000" alt="C# Icon" />
                  C# LANGUAGE
                </div>

                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS Icon" />
                  CSS
                </div>

                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JavaScript Icon" />
                  JAVASCRIPT
                </div>

                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML Icon" />
                  HTML
                </div>

                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" alt="ReactJS Icon" />
                  REACTJS
                </div>

                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000" alt="Tailwind Icon" />
                  TAILWIND
                </div>

              </div>
            </Marquee>
            
            <h3>DEVELOPER TOOLS:</h3>
            <Marquee
            autoFill={true}
              pauseOnHover={true}
              speed={100}
              gradient={false}
              direction={"left"}
              style={{
                whiteSpace: 'nowrap',
                display: 'flex',
                gap: '20px'
              }}
            >
              <div className="technical_marquee">
                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=13664&format=png&color=000000" alt="WordPress Icon" />
                  WORDPRESS
                </div>

                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" alt="Figma Icon" />
                  FIGMA
                </div>

                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=ffffff" alt="GitHub Icon" />
                  GITHUB
                </div>

                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000" alt="VSCode Icon" />
                  VSCODE
                </div>

                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=J0SgMWzAxqFj&format=png&color=000000" alt="Jupyter Icon" />
                  JUPYTER
                </div>

                <div className='marq_item'>
                  <img src="https://img.icons8.com/?size=100&id=vinpBD5oA3b4&format=png&color=000000" alt="PyCharm Icon" />
                  PYCHARM
                </div>

              </div>
            </Marquee>
          </div>
          
        </section>
      </div>
    </>
  );
}

export default App;
