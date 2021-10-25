import React from 'react'
import {useGlobalContext} from './context'
import {MdExpandLess,MdExpandMore} from 'react-icons/md'

function CartList({id,title,image,price,quantity}) {

    const {cartRemove,
        cartToggleAmount,
        } = useGlobalContext()||{}
    return (
        <>
          <article key={id} className='d-flex justify-content-start my-2 p-2'>
              <div className='imgName'>
                  <img src={image} className='cartImg img-fluid' alt={title}/>
              </div>
                        <div className='nameContent mr-1'>
                                <h4>{title}</h4>
                               <p>${price}</p>
                               <button className='noBtn btn-remove' onClick={(e)=>cartRemove(e,id)}>Remove</button>
                         </div>
                        <div className='ml-auto btnFnc'>
                          <button className='noBtn inc'
                             onClick={()=>cartToggleAmount(id,'inccart')}><MdExpandLess/></button>
                                <p className='vm'>{quantity}</p>
                                 <button className='noBtn dec'
                                 onClick={()=>cartToggleAmount(id,'deccart')}><MdExpandMore/></button>
                        </div>
            </article>  
        </>
    )
}

export default CartList
