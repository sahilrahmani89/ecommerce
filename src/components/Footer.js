import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Footer() {
    return (
        <footer className='bg-footer section-padding footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className="inner-content">
                            <div className="logo">
                              <Link to='/'> 
                                <img src="https://via.placeholder.com/150x40" alt='logo'/>
                              </Link>
                            </div>
                            <div className="comp-info">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                    <div className=" inner-content">
                        <div className="footerlinks">
                        <h4>Useful Links</h4>
                        <ul className="usefullinks">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About Us</Link></li>
                            <li><Link to='/cart'>Cart</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className='col-lg-4'>
                     <div className="f-newsletter ">
                            <h4>Subscribe Us</h4>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            <form className="d-flex">
                                <input type="mail" name="email" placeholder="mail"/>
                                <button  className="f-btn"><AiOutlineArrowRight className='iconarrow'/></button>
                            </form>
                     </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
