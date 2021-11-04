import React,{useState} from 'react'
import '../App.css'
import { useGlobalContext } from './context'
import ProductItem from './ProductItem'

function CatButList({btnName}) {
    const {productPost} = useGlobalContext()
    const [tempProduct, settempProduct] = useState(productPost)
    const [tempIndex,settempIndex]= useState(0)
    // 
    const filterCatPro =(e,item,index) =>{
        e.preventDefault()
        if(item==='All'){
            settempProduct(productPost)
            settempIndex(0)
            return;
        }
        let filterItem = productPost.filter((items)=>items.category===item)
        settempProduct(filterItem)
        settempIndex(index)
    }
    // 
    return (
        <>
        <div className='container section-padding pb-0'>
            <div className='row justify-content-center'>
                <div className='col-lg-10 align-item-center'>
                    <div className='nav-tabs'>
                        <div className='d-flex justify-content-between'>
                            {
                             btnName? btnName.map((item,index)=>{
                                    return(
                                        <div className='nav-item' key={index}>
                                            <button className={tempIndex===index?"btn-menu active":"btn-menu"}
                                             onClick={(e)=>filterCatPro(e,item,index)}
                                            >
                                            {item}
                                            </button>
                                        </div>
                                    )
                                }):''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container section-padding pt-0'>
                <div className='row'>
                    {
                       tempProduct ? tempProduct.map((item,index)=>{
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

export default CatButList
