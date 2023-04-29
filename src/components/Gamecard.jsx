import React, {useContext} from "react";
import "../styles/Gamecard.css"
import Context from "../context/Context";

function Gamecard({name, image, score, esrb, genres, platforms, release}){
    return(
        <div className="card">
            <img src={image}></img>
            <div className="cardContent">
                <h4>
                    {name}
                </h4>
                <p>about game info</p>
            </div>
        </div>
    )
}
export default Gamecard;