import React from 'react'
import MobileNav from './MobileNav'
import InnerBanner from './InnerBanner'
import {useGlobalContext} from './context'
import CatButList from './CatButList'
import Footer from './Footer'
// 
function Shop() {
  const {productPost} = useGlobalContext()
  let tempList;
 
  if(productPost && productPost.length>0){
    tempList = ['All',...new Set(productPost.map((item)=>item.category))]
  }
    return (
        <>
          <MobileNav/>  
          <InnerBanner innerBan='Shop'/> 
          <CatButList btnName={tempList}/>
          <Footer/>
        </>
    )
}

export default Shop
