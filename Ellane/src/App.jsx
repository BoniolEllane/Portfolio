import React from 'react'
import image from '/src/assets/placeholder1.png'
import { PiFacebookLogoThin, PiLinkedinLogoThin, PiPhoneThin } from "react-icons/pi";

function App() {

  return (
    <>
      <div>
        <section className="hero">
          <div className="col">
            <div className="row_info">
              <p>SAMPLE SUBTITLE</p>
              <h1>CAROUSEL: FW / IT SPEC</h1>
              <p>A passionate blabla
              </p>
              <button id="btn">Download Resume</button>
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

        {/* <div className="contact">
            <div>
              <h2>Custom Interactive Features Design</h2>
              <p>Natus sit volur tatem accus antium laudan tium</p>
            </div>
            <div>09358784136</div>
            <div>
              <button>Learn more</button>
            </div>
          </div> */}

        <section className="projects-slide-contain">
          <h2>Showcased below are the previous works from the past.</h2>
          <hr />
          <div className="project_slide">
            <div className="proj">Collaborate Design for UX/UI TUP Manila Website</div>
            <div className="proj">Collaborate Work for Fil-Chi Job Fair 2024</div>
            <div className="proj">The Writhing Labyrinth: A Wumpus Game using Random Walk Algorithm</div>
            <div className="proj">ClearPath Website Design</div>
            {/* <div className="proj">Admin Side Profile for GDS Booking System</div> */}
            <div className="proj">MasterApp for GDS Company</div>
            <div className="proj">Ongpin Tower Website: On Progress</div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
