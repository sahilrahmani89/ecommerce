import React, {useReducer,useContext,useEffect,useCallback,useState} from 'react'
import reducer from './reducer'

// 
const AppContext = React.createContext()
// 
const productsUrl = 'https://fakestoreapi.com/products?limit=12'
// 
const initialState ={
    productPost:[],
    loading:false,
    cartItem:[],
    cartTotal:0,
    inCart:false,
}
// 
const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const [mobileNav,setmobileNav] = useState(false)
    // 
    const fethcProduct = useCallback(
        async() => {
            dispatch({type:'LOADING'})
            try{
                const response = await fetch(`${productsUrl}`)
                const data = await response.json()
                
                const newData = data.map((item,index)=>{
                    data[index].inCart=false
                    data[index].quantity=1
                    return item
                })
                
                dispatch({type:'DISPLAY_PRODUCTS',load:newData})
                dispatch({type:'LOAD_FALSE'})
            }
            catch(error){
                console.log(error)
                dispatch({type:'LOAD_FALSE'})
            }
        },
        [],
    )
    // 
    
    // 
    const addToCart =(e,id)=>{
        e.preventDefault()
        state.productPost.map((item)=>{
            if(item.id===id){
                item.inCart=true
                dispatch({type:'ADD_TO_CART',load:{...item,id}})
            }
            return item
        }) 
    }
    // 
    const clearCart =(e)=>{
        e.preventDefault()
        dispatch({type:'CLEAR_CART'})
    }
    // 
    const cartRemove =(e,id)=>{
        e.preventDefault()
        dispatch({type:'REMOVE_CART',load:id})
    }
    // 
    const cartToggleAmount =(id,classVar)=>{
        dispatch({type:'ADD_QUANTITY',load:{id,classVar}})
    }
    // 
    const openMobileNav =()=>{
        setmobileNav(!mobileNav)
    }
    // 
    useEffect(() => {
        fethcProduct()
    }, [fethcProduct])
    // 
    useEffect(() => {
        dispatch({type:'DISPLAY_TOTAL'})
    }, [state.cartItem])
    //
    return(
        <AppContext.Provider
         value={{
            ...state,
            addToCart,
            clearCart,
            cartRemove,
            cartToggleAmount,
            mobileNav,
            openMobileNav,
        }}>
            {children}
        </AppContext.Provider>
    )
}
// 
// 
export const useGlobalContext=()=>{
    return useContext(AppContext)
}
// 
export {AppProvider,AppContext}