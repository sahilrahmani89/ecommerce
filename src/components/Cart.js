import React from 'react'
import {useGlobalContext} from './context'
import {Link} from 'react-router-dom'
import '../App.css'
import CartList from './CartList'
import Footer from './Footer'
// 
function Cart() {
    const {cartItem,
        cartTotal,
        clearCart
        } = useGlobalContext() ||{}
        // 
    if(cartItem.length===0){
        return(
        <div className='container my-5 section-padding'>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-12 text-center align-item-center'>
                    <h4 className='text-warning'>
                        Cart is empty
                    </h4>
                    <div className='my-4'>
                        <Link to='/' className='btn btn-warning'>Home</Link>
                    </div>
                </div>
            </div>
       </div>
     )
    }
    return (
        <>
             <div className='container my-5 section-padding'>
                <div className='row justify-content-center'>
                    <div className='col-lg-7 col-12'>
                        {
                            cartItem? cartItem.map((item,index)=>{
                                return <CartList {...item} key={index}/>
                            }) :'' 
                            
                        }
                        <div className='justify-content-center text-center my-5'>
                           {
                               cartTotal>0?<Link to='/pay' className='btn btn-success'>${cartTotal} Pay</Link>:''
                           }
                        </div>
                        <div>
                            <button className='btn btn-primary outline' onClick={clearCart}>Clear Cart</button>
                        </div>
                    </div>
                </div>
           </div> 
           <Footer/>
        </>
    )
}

export default Cart
