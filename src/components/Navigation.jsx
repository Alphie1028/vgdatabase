import React, {useContext} from "react";
import "../styles/Navigation.css"
import Context from "../context/Context";

function Navigation(){
    const {data, handleNext, handleBack, handlePage} = useContext(Context);
    const pages = Math.ceil(data.count / 20);
    const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);

    return(
        <div className="navBar">
            {data.previous !== null ? (<button onClick={() => handleBack(data.previous)}>Back</button>):(<button>nope</button>)}
            {pageNumbers.map((page) => (
                <button key={page} onClick={() => handlePage(page)}>
                    {page}
                </button>
            ))}
            <button onClick={()=> handleNext(data.next)}>Next</button>
        </div>
    )
}

export default Navigation