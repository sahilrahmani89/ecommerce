import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import {useGlobalContext} from './context'

function ProductItem({items}) {
    const {id,image,price,category,title,inCart} = items || {}
    const {addToCart} = useGlobalContext()
    return (
        <div className='mt-30'>
            <div className='product-body'>
                <div className='product-img relative'>
                    <img className='img-fluid' alt={title} src={image}/>
                    <div className='addtocart'>
                   
                    <button className={inCart?'btn btn-detail bg-success':'btn btn-detail'} 
                     onClick={(e)=>addToCart(e,id)}
                    disabled={inCart}
                     >
                    {
                        inCart?'Added To Cart':'Add To Cart'
                    }
                    </button>
                </div>
                </div>
                <div className='product-info'>
                    <p>{
                        title.length>35?`${title.substring(0,36)}...`:title
                        }</p>
                    <p><span className='fw-bold'>{category}</span></p>
                    <div className='d-flex'>
                       <h6>${price}</h6>
                       <div className='ml-auto'>
                         <Link to ={`product/${id}`}  className='btn btn-detail'>Info</Link>
                       </div> 
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default ProductItem
