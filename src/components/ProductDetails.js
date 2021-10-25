import React, {useEffect,useState,useCallback} from 'react'
import '../App.css'
import {useParams,Link} from 'react-router-dom'
import Loader from './Loader'
import Footer from './Footer'
import MobileNav from './MobileNav'
function ProductDetails() {
    // 
    const [load,setload] = useState(false)
    const [post,setpost] = useState()
    const {id} = useParams()
    const fetchData = useCallback(
        async() => {
            setload(true)
            try{
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await response.json()
                setpost(data)
                setload(false)
            }
            catch(error){
                console.log(error)
                setload(false)
            }
        },
        [id],
    )
    // 
    useEffect(() => {
        fetchData()
    }, [fetchData])
    // 
    if(load){
        return(
            <Loader/>
        )
    }
    // 
    
    // 
    const {title,image,category,price,description} = post || {}
    // 
    return (
        <>
        <MobileNav/>
       <div className='container section-padding '>
           <div className='row justify-content-center '>
               <div className='col-lg-5 col-md-8 col-12 align-item-center text-center'>
                 <div className='mt-30'>
                    <div className='product-body'>
                        <div className='product-img relative'>
                            <img className='img-fluid' alt={title} src={image}/>
                        </div>
                        <div className='product-info'>
                            <p>{title}</p>
                            <p><span className='fw-bold'>{category}</span></p>
                            <div>
                            <h6>${price}</h6>
                            <p>{description}</p>
                            </div>
                        
                        </div>
                    </div>
                 </div>
               </div>
               <div className='row justify-content-center my-4'>
                   <div className='col-lg-12 col-12 text-center align-item-center'>
                       <Link to ='/' className=' btn btn-info'>Home</Link>
                   </div>
               </div>
           </div>
       </div>
       <Footer/>
       </>
    )
}

export default ProductDetails
