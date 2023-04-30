import React, {useContext} from "react";
import "../styles/Gamecard.css"
import Context from "../context/Context";

function Gamecard({name, image, score, genres, platforms, release}){

    return(
        <div className="card">
            <img className="cardImg"src={image}></img>
            <div className="cardContent">
                <h2>
                    {name}
                </h2>
                <h4>Release Date: {release}</h4>
                <h5> {'Genres: '}
                    {genres.map((genre, index) => (
                        <span key={genre.id}>
                            {genre.name}
                            {index !== genres.length - 1 && ", "}
                        </span>
                    ))}
                </h5>
                <h5>Meta Critic Score: {score}</h5>
                <h5>{'Platforms: '}
                    {platforms.map((platform, index) => (
                        <span key={platform.platform.id}>
                            {platform.platform.name}
                            {index !== platforms.length - 1 && ", "}
                        </span>
                    ))}
                </h5>
            </div>
        </div>
    )
}
export default Gamecard;