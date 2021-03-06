import React from 'react'
import '../App.css'
import MobileNav from './MobileNav'
import InnerBanner from './InnerBanner'
import Benifit from './Benifit'
import about from '../img/about.jpg'
import Footer from './Footer'
// 

function About() {
    return(
      <>
        <MobileNav/>
        <InnerBanner innerBan='About Us'/>
        <Benifit/>
  <section className="about-inner section-padding">
    <div className="container">
      <div className="row">
            <div className="col-lg-6 col-md-6 col-12 in-about-content">
                <div className=" abt-inf">
                <div className="topline"></div>
                <h2 className="pc"> We glad, You Visit This</h2>
                    <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    </p>
                <div className="mb-30"></div>
                    <button  className="btn btn-detail">Continue Reading</button>
          
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-12">
                <div className="about-img">
                  <img src={about} alt='model'></img>
                </div>
          </div>
      </div>
      </div>
  </section>
   <Footer/>
  </>
    )
}

export default About
