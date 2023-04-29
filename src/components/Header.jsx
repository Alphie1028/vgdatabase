import React from "react";
import "../styles/Header.css"



function Header(){
    return(
        <>
            <header>
                <h1 id="headerTitle">Brennan's Video Game Database</h1>
                <button className="homebtn">Home</button>
                <div className="dropDown">
                    <button className="dropbtn">Nintendo</button>
                    <div className="dropContent">
                        <button className="dropOption">Switch</button>
                        <button className="dropOption">Wii U</button>
                        <button className="dropOption">Wii</button>
                        <button className="dropOption">GameCube</button>
                        <button className="dropOption">N64</button>
                        <button className="dropOption">SNES</button>
                        <button className="dropOption">NES</button>
                    </div>   
                </div>
                <div className="dropDown">
                    <button className="dropbtn">Sony</button>
                    <div className="dropContent">
                        <button className="dropOption">PS5</button>
                        <button className="dropOption">PS4</button>
                        <button className="dropOption">PS3</button>
                        <button className="dropOption">PS2</button>
                        <button className="dropOption">PS1</button>
                    </div>
                </div>
                <div className="dropDown">
                    <button className="dropbtn">Microsoft</button>
                    <div className="dropContent">
                        <button className="dropOption">Xbox Series X/S</button>
                        <button className="dropOption">Xbox One</button>
                        <button className="dropOption">Xbox 360</button>
                        <button className="dropOption">Xbox</button>
                    </div>
                </div>
                <div className="search">
                    <input className="searchBar" placeholder="Video Game"></input>
                    <button className="homebtn">Search</button>
                </div>
            </header>
        </>
    )
}

export default Header;