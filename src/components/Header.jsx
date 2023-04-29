import React, {useContext} from "react";
import Context from "../context/Context";
import "../styles/Header.css"

function Header(){
    const {setCurrentPlatform, setCurrentSearch} = useContext(Context);

    const handleSearchChange = (event) => {
        const searchValue = event.target.value;
        setCurrentSearch(searchValue !== "" ? searchValue : false);
    };

    return(
        <>
            <header>
                <h1 id="headerTitle">Brennan's Video Game Database</h1>
                <button className="homebtn" onClick={() => setCurrentPlatform(false)}>Home</button>
                <div className="dropDown">
                    <button className="dropbtn">Nintendo</button>
                    <div className="dropContent">
                        <button className="dropOption" onClick={() => setCurrentPlatform("7")}>Switch</button>
                        <button className="dropOption" onClick={() => setCurrentPlatform("10")}>Wii U</button>
                        <button className="dropOption" onClick={() => setCurrentPlatform("11")}>Wii</button>
                        <button className="dropOption" onClick={() => setCurrentPlatform("105")}>GameCube</button>
                        <button className="dropOption" onClick={() => setCurrentPlatform("83")}>N64</button>
                        <button className="dropOption" onClick={() => setCurrentPlatform("79")}>SNES</button>
                        <button className="dropOption" onClick={() => setCurrentPlatform("49")}>NES</button>
                    </div>   
                </div>
                <div className="dropDown">
                    <button className="dropbtn">Sony</button>
                    <div className="dropContent">
                        <button className="dropOption" onClick={() => setCurrentPlatform("187")}>PS5</button>
                        <button className="dropOption" onClick={() => setCurrentPlatform("18")}>PS4</button>
                        <button className="dropOption" onClick={() => setCurrentPlatform("16")}>PS3</button>
                        <button className="dropOption" onClick={() => setCurrentPlatform("15")}>PS2</button>
                        <button className="dropOption" onClick={() => setCurrentPlatform("27")}>PS1</button>
                    </div>
                </div>
                <div className="dropDown">
                    <button className="dropbtn">Microsoft</button>
                    <div className="dropContent">
                        <button className="dropOption" onClick={() => setCurrentPlatform("186")}>Xbox Series X/S</button>
                        <button className="dropOption" onClick={() => setCurrentPlatform("1")}>Xbox One</button>
                        <button className="dropOption" onClick={() => setCurrentPlatform("14")}>Xbox 360</button>
                        <button className="dropOption" onClick={() => setCurrentPlatform("80")}>Xbox</button>
                    </div>
                </div>
                <div className="search">
                    <input className="searchBar" placeholder="Video Game" onChange={handleSearchChange}></input>
                    <button className="homebtn">Search</button>
                </div>
            </header>
        </>
    )
}

export default Header;