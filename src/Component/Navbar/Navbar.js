import React, { useState } from 'react'
// import { BsSearch } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { globalState } from '../../Component/Context/Context.js'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import Product from '../Product/Product.js'
import Carousel from '../Carousel/Carousel.js'
const Navbar = () => {
    let [searchbox, setSearch] = useState("")
    let { state, dispatch } = useContext(globalState)
    let a = useNavigate()
    let fav = () => {
        a('/Favourite')
    }
    let cart = () => {
        a('/Cart')

    }
    const handle = (e) => {
        if (e.target.name === "search") {
            setSearch(e.target.value)
            console.log(e.target.name, e.target.value)
        }
    }
    const search = (e) => {
        e.preventDefault()
        dispatch({ type: "updatename", payload: searchbox })
        console.log(state.arr)
    }

    console.log(state.name)


    return (
        <div>
            <div className="nav-sec">
                <div className="navlist">
                    <ul>
                        <li><a href="#">First Citizen Club</a></li>
                        <li><a href="#">All Stores</a></li>
                        <li><a href="#">Help & support</a></li>
                    </ul>
                </div>
                <div className="logo">
                    <img src="https://prodstatic.shoppersstop.com/_ui/updated_path/images/shopperstopimgaes_web/newLogo.svg" alt="" />
                </div>
                <div className="icon">
                    <form>
                        <input type="search" onChange={handle} placeholder="Search Product & Brands" id="search" className="searchhh" name="search" value={searchbox} />
                    </form>
                    <button onClick={search} style={{ backgroundColor: "black", padding: "5px", color: "white" }}>Go</button>
                    <div onClick={fav} style={{ fontSize: "23px" }}><FiHeart /></div>
                    <div onClick={cart} style={{ fontSize: "23px" }} ><BsHandbag /></div>
                    <div style={{ fontSize: "23px" }}><CgProfile /></div>


                </div>

            </div >
            <Carousel />
            <Product />
        </div>
    )
}
export default Navbar