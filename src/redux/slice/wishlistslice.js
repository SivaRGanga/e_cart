import { createSlice } from "@reduxjs/toolkit";

const wishlistslice = createSlice({
    name :'wishlistslice',
    initialState:[],
    reducers :{
        addTowishlist : (state,action)=>{
            state.push(action.payload)
        },
        removefromwishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})
export const {addTowishlist,removefromwishlist}= wishlistslice.actions
export default wishlistslice.reducer