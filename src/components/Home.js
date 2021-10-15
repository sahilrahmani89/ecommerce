import React from 'react'
import Footer from './Footer'
import Products from './Products'
import HomeBanner from './HomeBanner'
import Benifit from './Benifit'
import MobileNav from './MobileNav'

function Home() {
    return (
        <>
        <MobileNav/>
          <HomeBanner/>
          <Benifit/>
           <Products/> 
           <Footer/>
        </>
    )
}

export default Home
