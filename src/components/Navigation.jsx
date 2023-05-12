import React, {useContext} from "react";
import "../styles/Navigation.css"
import Context from "../context/Context";

function Navigation(){
    const {data, handleNext, handleBack, handlePage} = useContext(Context);
    const pages = Math.ceil(data.count / 20);
    const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);

    return(
        <div className="navBar">
            {data.previous !== null ? (<div className="navBtn"onClick={() => handleBack(data.previous)}>Back</div>):(<></>)}
            {pageNumbers.map((page) => (
                <div className="pageBtn" key={page} onClick={() => handlePage(page)}>
                    {page}
                </div>
            ))}
            <div className="navBtn"onClick={()=> handleNext(data.next)}>Next</div>
        </div>
    )
}

export default Navigation