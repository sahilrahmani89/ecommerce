import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import {FaShoppingCart ,FaBars, FaTimes} from 'react-icons/fa'
import {useGlobalContext} from './context'

function Navbar() {
    const {cartItem,mobileNav,openMobileNav} = useGlobalContext()
    // 
    return (
        <nav className='bg-navBar enavbar'>
            <div className='container'>
                <div className='navContent d-flex'>
                    <div className='navLogo'>
                        <Link to='/'> 
                            <img src="https://via.placeholder.com/150x50" alt='logo'/>
                        </Link>
                    </div>
                    <div className='display-bars'>
                        <span className='mobilenavdisplay' 
                        onClick={openMobileNav}>{mobileNav?<FaTimes/>:<FaBars/>}</span>
                    </div>
                    <div className='ml-auto mt-6 navbar-links'>
                        
                            <ul>
                                <li>
                                    <Link to ='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to ='/about'>About</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Contact Us</Link>
                                </li>
                            </ul>
                            
                    </div>
                    <span className='relative basketspan'> 
                                    <Link className='basket' to='/cart'>
                                        <FaShoppingCart className='white fs-20'/>
                                    </Link>
                                    <div className='cartLengthNum'>
                                        {
                                            cartItem.length>0?cartItem.length:''
                                        }
                                    </div>
                     </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
