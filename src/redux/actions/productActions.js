import { ActionTypes } from '../constants/action-types'

export const setProducts=(product)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payloads:product
    }
},

export const selectedProducts=(product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payloads:product
    }
},

// export const removedProducts=(product)=>{
//     return{
//         type: ActionTypes.REMOVED_SELECTED_PRODUCT,
//         payloads:product
//     }
// },