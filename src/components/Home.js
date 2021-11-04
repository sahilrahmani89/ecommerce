import React,{useEffect} from 'react'
import Footer from './Footer'
import Products from './Products'
import HomeBanner from './HomeBanner'
import Benifit from './Benifit'
import MobileNav from './MobileNav'
import { useGlobalContext } from './context'

function Home() {
    const {catbtnlist} = useGlobalContext()
    useEffect(() => {
        if(catbtnlist.length>0){
            console.log(catbtnlist)
        }
    }, [catbtnlist])
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
