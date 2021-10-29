import React from 'react'
import '../App.css'

function InnerBanner({innerBan}) {
    return (
        <>
         <div className="inner-banner relative z-1">
           <div className="overlay"></div>
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="banner-header mw-800">
                    <h1 className="pc"> {innerBan}</h1>
                    <p className="white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                    </div>
                </div>
                </div>
            </div>
           </div>  
        </>
    )
}

export default InnerBanner
