import React from 'react'
import {FaShoppingCart,FaExchangeAlt,FaHeadset} from 'react-icons/fa'
import '../App.css'

function Benifit() {
    return (
    <section className="benifit section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="benifit-ul">
                <li><FaShoppingCart className="shopping-cart li-icons"></FaShoppingCart>
                  <h5 className="pc">Free Shipping</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                </li>
                <li><FaExchangeAlt className="fa-exchange li-icons"></FaExchangeAlt>
                  <h5 className="pc">2 Days Return</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                </li>
                <li><FaHeadset className="fa-headset li-icons"></FaHeadset>
                  <h5 className="pc">Call Us</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Benifit
