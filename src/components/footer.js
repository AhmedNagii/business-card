import React from "react"

import Faceicon from "../images/f_icon.svg"
import GitHubicon from "../images/g_icon.svg"
import instaicon from "../images/i_icon.svg"
import linkicon from "../images/l_icon.svg"
import Tweeticon from "../images/t_icon.svg"









export default function Footer(){

    


    return (
        <footer>
            <ul className="icons-list">
                <li><img className="icon" src={Faceicon}></img></li>
                <li><img className="icon" src={GitHubicon}></img></li>
                <li><img className="icon" src={instaicon}></img></li>
                <li><img className="icon" src={linkicon}></img></li>
                <li><img className="icon" src={Tweeticon}></img></li>
            </ul>
            </footer>
    )
}