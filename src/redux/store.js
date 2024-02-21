import { configureStore } from "@reduxjs/toolkit";
import wishlistslice from "./slice/wishlistslice";
import Cartslice from "./slice/Cartslice";


const store=configureStore({
    reducer:{
        wishlistreducer:wishlistslice,
        cartreducer:Cartslice
    }
})
export default store