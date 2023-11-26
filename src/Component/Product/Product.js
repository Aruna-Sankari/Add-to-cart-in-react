import React from "react";
import './Product.css'
import { BsHandbag } from "react-icons/bs";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { globalState } from '../Context/Context.js'
import { useContext } from 'react';


const Product = () => {


    let { state, dispatch } = useContext(globalState)


    let heart = (id) => {
        let x = state.arr.map((e) => {
            return id === e.id ?
                e.fav === "false" ? { ...e, fav: e.fav = "true", color: "red" }
                    : { ...e, fav: e.fav = "false", color: 'black' } : e
        })

        dispatch({ type: 'updatearr', payload: x })
    }
    let cart = (id) => {
        let y = state.arr.map((e) => {
            return id === e.id ?
                e.iscart === "false" ? { ...e, iscart: e.iscart = "true" }
                    : { ...e, iscart: e.iscart = "false", color: "black" } : e
        })
        dispatch({ type: 'updatearr', payload: y })
    }
    const increase = (id) => {
        let inc = state.arr.map((val) => {
            return val.id === id ? { ...val, count: val.count + 1 } : val
        })
        dispatch({ type: "updatearr", payload: inc })

    }
    const decrease = (id) => {
        let dec = state.arr.map((e) => {
            return e.id === id ? e.count < 2 ? { ...e, iscart: e.iscart = "false" } : { ...e, count: e.count - 1 } : e
        })
        dispatch({ type: "updatearr", payload: dec })

    }
    console.log(state.arr);
    return (
        <div className="row">
            {
                state.arr.map((a, b) => {

                    return state.name === "" ? <div key={b} className="card-col">
                        <div className="card">
                            <div className="card-image">
                                <img src={a.img} alt="loading" />
                            </div>
                            <div className="card-con">
                                <h3>{a.name}</h3>
                                <h5>Price: {a.price}</h5>
                                <p>Review: {a.review}</p>
                            </div>
 
                            <div className="card-btn">

                                {
                                    a.fav === "false" ? <div onClick={() => heart(a.id)} className="icon1"><BsHeart /></div> : <div onClick={() => heart(a.id)} className="icon1" style={{ color: "red" }}><BsFillHeartFill /></div>


                                }

                                {
                                    a.iscart === "false" ? <div onClick={() => cart(a.id)} className="icon2"></div> : <div onClick={() => cart(a.id)} className="icon2" style={{ color: "red" }} ></div>

                                }
                                {
                                    a.iscart === "false" ? <div onClick={() => cart(a.id)} className="icon2"><BsHandbag /></div> : <div><button onClick={() => increase(a.id)} style={{ backgroundColor: "black", padding: "5px", "color": "white", "fontSize": "20px" }} >+</button><p style={{ textAlign: "center" }}>{a.count}</p><button onClick={() => decrease(a.id)} style={{ backgroundColor: "black", padding: "8px", "color": "white", "fontSize": "17px" }}>-</button></div>
                                }



                            </div>
                        </div>
                    </div> : a.name === state.name ? <div key={b} className="card-col">
                        <div className="card">
                            <div className="card-image">
                                <img src={a.img} alt="loading" />
                            </div>
                            <div className="card-con">
                                <h3>{a.name}</h3>
                                <h5>Price: {a.price}</h5>
                                <p>Review: {a.review}</p>
                            </div>
                            <div className="card-btn">

                                {
                                    a.fav === "false" ? <div onClick={() => heart(a.id)} className="icon1"><BsHeart /></div> : <div onClick={() => heart(a.id)} className="icon1" style={{ color: "red" }}><BsFillHeartFill /></div>


                                }

                                {
                                    a.iscart === "false" ? <div onClick={() => cart(a.id)} className="icon2"></div> : <div onClick={() => cart(a.id)} className="icon2" style={{ color: "red" }} ></div>

                                }
                                {
                               
                                    a.iscart === "false" ? <div onClick={() => cart(a.id)} className="icon2"><BsHandbag /></div> : <div><button onClick={() => increase(a.id)} style={{ backgroundColor: "black", padding: "5px", "color": "white", "fontSize": "20px" }} >+</button><p style={{ textAlign: "center" }}>{a.count}</p><button onClick={() => decrease(a.id)} style={{ backgroundColor: "black", padding: "8px", "color": "white", "fontSize": "17px" }}>-</button></div>
                                } 



                            </div>
                        </div>
                    </div> : ""



                })

            }
        </div>
    )
}

export default Product


