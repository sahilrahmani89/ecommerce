const reducer =(state,action)=>{
    if(action.type==='LOADING'){
        return {...state,loading:true}
    }
    if(action.type==='LOAD_FALSE'){
        return {...state,loading:false}
    }
    if(action.type==='DISPLAY_PRODUCTS'){
        return {...state,productPost:action.load}
    }
    if(action.type==='ADD_TO_CART'){
        let newItems = state.productPost.map((item)=>{
            if(item.id===action.load.id){
                return{...item,inCart:true}
            }
            return item
        })
        return{...state,cartItem:[...state.cartItem,{...action.load}],productPost:newItems}
    }
    if(action.type==='CLEAR_CART'){
        let newItems = state.productPost.map((item)=>{
            item.inCart=false
            return  {...item,inCart:false}
        })
        return {...state,cartItem:[],productPost:newItems}
    }
    if(action.type==='REMOVE_CART'){
        let newItems = state.productPost.map((item)=>{
            if(item.id===action.load){
                return{...item,inCart:false}
            }
            return item
        })
        let newItem = state.cartItem.filter((item)=>item.id!==action.load)
        return{...state,cartItem:newItem,productPost:newItems}
    }
    // 
    if(action.type==='ADD_QUANTITY'){
       let newCart =  state.cartItem
       .map((item)=>{
           if(item.id===action.load.id){
               if(action.load.classVar==='inccart'){
                   return{...item,quantity:item.quantity+1}
               }
               if(action.load.classVar==='deccart'){
                   if(item.quantity<1){
                       return {...item,quantity:0}
                   }
                  return{...item,quantity:item.quantity-1}
               }
           }
           return item
       })
       return{...state,cartItem:newCart}
    }
    // 
    if(action.type==='DISPLAY_TOTAL'){
       let num = state.cartItem.reduce((acc,curr)=>{
           const {price,quantity} = curr
            return acc+price*quantity
       },0)
       num = parseFloat(num.toFixed(2))
        return {...state, cartTotal:num} 
    }
    throw new Error('no matching action type')
}
export default reducer