
import React, { useState, useRef } from 'react';
import { ReactTyped } from "react-typed";
import './index.css';
import image from '/src/assets/placeholder1.png';
import ux1 from '/src/assets/ux.png';
import { PiLinkedinLogoThin, PiPhoneThin } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import emailjs from '@emailjs/browser';

import imag1 from '/src/assets/ux.png'; // Replace with the correct image paths
import imag2 from '/src/assets/filchi.png';
import imag3 from '/src/assets/cp.png';
import imag4 from '/src/assets/twl.png';
import imag5 from '/src/assets/ongpin.png';



const Web = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const [clickedCard, setClickedCard] = useState(null);
  const form = useRef();

  const handleCardClick = (index) => {
    setClickedCard(clickedCard === index ? null : index);
  };
  const descriptions = [
    'This project involved designing a user-friendly interface for the TUP Manila website.',
    'A collaborative effort to connect job seekers and employers at the Fil-Chi Job Fair 2024.',
    'Designed a clean and modern website for ClearPath, focusing on user experience.',
    'Developed a text-based adventure game titled "The Writhing Labyrinth."',
    'Currently working on the Ongpin Tower website, enhancing its online presence.'
  ];

  const images = [imag1, imag2, imag3, imag4, imag5];

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_jfrk197', 'template_pl9w02s', form.current, '9-CE23zskKkT2wDXn')
      .then(
        () => {
          alert('Your message has been sent successfully!'); // Success alert
        },
        () => {
          alert('There was an error sending your message. Please try again.'); // Failure alert
        }
      );
  };
  const links = [
    'https://www.figma.com/proto/qpt6EAgg1TcvB9tDvfIBIJ/UX-SOCIETY-WEBSITE?node-id=61-89&starting-point-node-id=61%3A89',
    'https://www.filchi-jobfair.com/',
    'https://www.clear-path.ph/', // Link for the third project
    'https://niloknation.itch.io/the-writhing-labyrinth', // Link for the fourth project
    'https://ongpintower.com' // Link for the fifth project
  ];
  


  return (
    <>
      <header>
        <h1> Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className='Main'>
        <section id="hero" className="hero">
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
              <h5>Computer Science graduate seeking a dynamic role as an IT Specialist and Web Developer within a large organization.
                Bringing comprehensive expertise in user interface design, web development, information management, and systems evaluation, with a demonstrated ability to improve operational processes.
                Highly skilled in WordPress, ReactJS, CSS, Bootstrap, network infrastructure, hardware troubleshooting, a background with game development and design, with a strong ability to work collaboratively
                within multidisciplinary teams.</h5>
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
        <section id="projects" className="projects-slide-contain">
          <div className="proj-heading">
            <h2>PREVIOUS WORKS</h2>
            <p>Take a look at the previous works highlighting web apps, websites, and mockup designs. Click the cards to show more details.</p>
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
                    <img src={images[index]} alt={title} />
                  </div>
                  <div className="colcard">
                    <h3>{title}</h3>
                    <p>{descriptions[index]}</p>
                    <button onClick={() => window.open(links[index], '_blank')}>Learn More</button>
                  </div>
                </div>
              ))}
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="col">
            <div className="skill_col1">
              <h1><span>TECHNICAL SKILLS:</span></h1>
              <div className="lang">
                <h3>
                  Website Development</h3>
              </div>
              <div className="lang">
                <h3> Website Designing</h3>
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
          <div className="cont_marquee">
            <div className="skills-marquee">
              <h3>TECH STACK:</h3>
              <Marquee
                autoFill={false}
                pauseOnHover={true}
                speed={100}
                gradient={false}
                direction={"right"}
                style={{
                  marginBottom: '5em',
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
                  marginBottom: '3em',
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
          </div>

        </section>

        <section id="contact" className="contact">
          
          <div className="row">
            <div className="row2">
              <div className="contact_cont">
                <div className='title'>
                  <h1 className='title'>GET IN TOUCH NOW!</h1>
                </div>
                <div className="contact_conts">
                  <div className="design-cont">
                    <h2 className='l'>CONTACT NOs.: </h2>
                    <p>GLOBE : +639 35-878-4136</p>
                    <p>DITO : +639 91-902-9017</p>

                  </div>
                  <div className="design-cont">
                    <h2 className='l'>EMAIL:</h2>
                    <p>boniol.ellane@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="form_cont">
                <h2 >Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} id="contact-form">
                  <div>
                    <label>Name: </label>
                    <input type="text" name="user_name" required />
                  </div>
                  <div>
                    <label>Email: </label>
                    <input type="email" name="user_name" required />
                  </div>
                  <div>
                    <label>Phone: </label>
                    <input type="number" name="user_phone" required />
                  </div>
                  <div>
                    <label>Message: </label>
                    <textarea name="message" required />
                  </div>
                  <input type="submit" value="SEND" />
                </form>
              </div> 
            </div>

          </div>

        </section>
      </div>
    </>
  );
}

export default Web;
