import React, {createContext, useState, useEffect} from "react";

const apiKey = import.meta.env.VITE_RAWG_API_KEY;

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [platform, setPlatform] = useState(false);
    const [searchGame, setSearchGame] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=${apiKey}&platforms=${platform}`)
            .then(response => response.json()) 
            .then(data => {
                setData(data); 
                console.log(data); 
            })
            .catch(error => console.log(error));
    }, [platform]);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${searchGame}`)
            .then(response => response.json()) 
            .then(data => {
                setData(data); 
                console.log(data); 
            })
            .catch(error => console.log(error));
    }, [searchGame]);

    const setCurrentPlatform = (value) =>{
        setPlatform(value);
        
    }
    const setCurrentSearch = (value) => {
        setSearchGame(value);
    }
    return(
        <Context.Provider value={{
            setCurrentPlatform,
            data,
            platform,
            setCurrentSearch,
            searchGame
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;