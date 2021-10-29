import React from 'react'
import '../App.css'
import MobileNav from './MobileNav'
import InnerBanner from './InnerBanner'
import Footer from './Footer'
import {FaLocationArrow,FaMobileAlt,FaEnvelopeOpen} from 'react-icons/fa'

function Contact() {
    return (
        <>
        <MobileNav/>
        <InnerBanner innerBan='Contact Us'/>
        <section className="contact">
	<div className="section-padding">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 in-about-content">
					<div className="contact-view left">
						<div className="info-block">
							<ul className="">
								<li className="d-flex"><FaLocationArrow className="fas fa-map-marker-alt "></FaLocationArrow>
									<p>Hno 12, Street Num 1, City
										State PinCode</p>
								</li>
								<li className="d-flex"><FaMobileAlt className=" fas fa-mobile-alt "></FaMobileAlt><a href="!#">+91 12345xxxx</a> 
								</li>
								<li className="d-flex"><FaEnvelopeOpen className="fas fa-envelope "></FaEnvelopeOpen>
									<a href="!#">mail@mail.com</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="text-right">
						<div className="loginform">
							<form>
								<div className="form-group  form-group-with-icon has-error has-danger">
									<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required="required" data-error="email required."/>
								</div>
								<div className="form-group">
									<input type="phone" className="form-control" id="phone" placeholder="Mobile Number"/>
								</div>
								<div className="form-group">
									<textarea name="message" className="form-control message" rows="4" placeholder="Your Message ..."></textarea>
								</div>
                                 <button className="btn btn-detail submit mb-15"> Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        <Footer/>
        </>
    )
}

export default Contact
