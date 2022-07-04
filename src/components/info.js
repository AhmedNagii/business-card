import React from "react"
import myImage from "../images/me.jpg"

export default function Info(){
    
    return (
        <div className="info">
        
    <img src={myImage}></img>
    <h1>Ahmed Nagi</h1>
    <p className="job">Frontend Devloper</p>
    <a>ahmednagi.website</a>
    <button>Email</button>
        </div>
    )
}