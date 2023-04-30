import React, {createContext, useState, useEffect} from "react";

const apiKey = import.meta.env.VITE_RAWG_API_KEY;

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [platform, setPlatform] = useState(false);
    const [searchGame, setSearchGame] = useState(false);
    const [next, setNext] = useState(null);
    const [page, setPage] = useState(null);
    const [back, setBack] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=${apiKey}&platforms=${platform}`)
            .then(response => response.json()) 
            .then(data => {
                setData(data); 
            })
            .catch(error => console.log(error));
    }, [platform]);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${searchGame}`)
            .then(response => response.json()) 
            .then(data => {
                setData(data); 
            })
            .catch(error => console.log(error));
    }, [searchGame]);

    useEffect(() => {
        if (next) {
            fetch(next)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                })
                .catch(error => console.log(error));
        }
        if (back) {
            fetch(back)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                })
                .catch(error => console.log(error));
        }
    }, [next, back]);
    useEffect(() => {
        if (page) {
            let url = `https://api.rawg.io/api/games?key=${apiKey}&page=${page}`;
            if (searchGame) {
                url += `&search=${searchGame}`;
            } else if (platform) {
                url += `&platforms=${platform}`;
            }
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                })
                .catch(error => console.log(error));
        }
    }, [page, searchGame, platform]);
    const setCurrentPlatform = (value) =>{
        setPlatform(value);
        
    }
    const setCurrentSearch = (value) => {
        setSearchGame(value);
    }
    const handleNext = (value) =>{
        setNext(value);
    }
    const handleBack = (value) =>{
        setBack(value);
    }
    const handlePage = (value) => {
        setPage(value);
    }
    return(
        <Context.Provider value={{
            setCurrentPlatform,
            data,
            platform,
            setCurrentSearch,
            searchGame,
            handleNext,
            handleBack,
            handlePage
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;