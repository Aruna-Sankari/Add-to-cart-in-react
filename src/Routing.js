import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar.js'
import { useReducer } from 'react'
import { globalState } from './Component/Context/Context.js'
import {initialState,reducer } from './Component/Context/Reducer.js'
import Favourite from './Component/Favourite/Favourite.js'
import Cart from './Component/addtocart/Cart.js'
import Carousel from './Component/Carousel/Carousel.js'
const Routing = () => {
    let [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    console.log(dispatch)
    return (
        <div>
            <globalState.Provider value={{ state, dispatch }}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Navbar />} />
                        <Route path='/Favourite' element={<Favourite />} />
                        <Route path='/Cart' element={<Cart />} />
                        <Route path='/Carousel' element={<Carousel/>} />


                    </Routes>
                </BrowserRouter>
            </globalState.Provider>



        </div>
    )
}
export default Routing