import React from 'react'
import {useGlobalContext} from './context'
import Loader from './Loader'
import ProductItem from './ProductItem'

function Products() {
    const {loading,productPost} = useGlobalContext() || {}

    if(loading){
        return <Loader/>
    }
    if(productPost.length<0){
        return(
            <div className='container my-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-4  col-12 my-5 text-center align-item-center'>
                        <h3 className='text-primary'>
                            Nothing To Display
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
//    
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        productPost ? productPost.map((item,index)=>{
                           return (
                               <div className='col-lg-4 col-md-6 col-12'  key = {index}>
                                   <ProductItem items= {item} />
                               </div>
                           )
                        }):''
                    }
                </div>
            </div>
        </>
    )
}

export default Products
