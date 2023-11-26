import React from "react";

import './Favourite.css'
import { BsHandbag } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";

import { globalState } from '../Context/Context.js'
import { useContext } from 'react';

const Favourite = () => {
    let { state, dispatch } = useContext(globalState)
    let like = (id) => {
        let y = state.arr.map((e) => {
            return id === e.id ? e.fav === "true" ? { ...e, fav: e.fav = "false", color: "black" }
                : { ...e, fav: e.fav = "true", color: 'red' } : e
        })

        dispatch({ type: 'updatearr', payload: y })

    }


    return (
        <div className="row">
            {
                state.arr.map((a, b) => {

                    return a.fav === 'true' ? <div key={b} className="card-col">
                        <div className="card">
                            <div className="card-image">
                                <img src={a.img} alt="" />
                            </div>
                            <div className="card-con">
                                <h3>{a.name}</h3>
                                <h5>Price: {a.price}</h5>
                                <p>Review: {a.review}</p>
                            </div>
                            <div className="card-btn">
                                <div className="icon1" onClick={()=>like(a.id)} style={{color:"red"}}><BsFillHeartFill /></div>
                                <div className="icon2"><BsHandbag /></div>
                            </div>
                        </div>
                    </div> : ''
                })

            }
        </div>
    )

}

export default Favourite