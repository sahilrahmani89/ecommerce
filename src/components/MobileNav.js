import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import {useGlobalContext} from './context'


function MobileNav() {
    const {mobileNav} = useGlobalContext()
    return (
        <>
    {
    mobileNav?
          <div className='nav-mob-links'>
              <ul>
                  <li>
                      <Link to='/'>Home</Link>
                  </li>
                  <li>
                      <Link to ='/about'>About</Link>
                  </li>
                  <li>
                      <Link to='/contact'>Contact Us</Link>
                  </li>
              </ul>
          </div> :""
}
        </>
    )
}

export default MobileNav
