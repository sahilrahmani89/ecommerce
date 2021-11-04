import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function HomeBanner() {
    return (
        <section className ='banner relative z-1'>
           <div className='overlay'>
               <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-12'></div>
                       <div className='col-lg-6 col-md-6 col-12'>
                       <div className="banner-header">
                            <h1 className="pc">
                                Providing Best Collection to your door , Shop With US
                            </h1>
                            <p className="mb-20 white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            <div className="banner-btn d-flex">
                                <Link to='/shop' className="btn btn-info mr-10">Shop Now</Link>
                                <Link to="/contact" className="btn btn-warning ">Contact Us</Link>
                            </div>
                       </div>
                        </div> 
                        
                    </div>
               </div>
           </div> 
        </section>
    )
}

export default HomeBanner
