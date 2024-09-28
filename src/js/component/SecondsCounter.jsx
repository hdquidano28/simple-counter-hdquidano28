import React, { useState, useEffect }from "react";

export const SecondsCounter = () => {
    const [count, setCount] = useState(0); 
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => (prevCount < 100000 ? prevCount + 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    const hundredThousandDigit = Math.floor(count / 100000);
    const tenThousandsDigit = Math.floor((count % 100000) / 10000);
    const thousandsDigit = Math.floor((count % 10000) / 1000);
    const hundredsDigit = Math.floor((count % 1000) / 100);
    const tensDigit = Math.floor((count % 100) /10);
    const unitDigit = count % 10;
    

    return(
        <>
        
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-auto custom-column-size mx-2">
                    <div className="card text-light d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/></svg>    
                    </div>
                </div>
                <div className="col-auto custom-column-size mx-2">
                    <div className="card text-light d-flex justify-content-center align-items-center fs-1">
                        {hundredThousandDigit}
                    </div>
                </div>
                <div className="col-auto custom-column-size mx-2">
                    <div className="card text-light d-flex justify-content-center align-items-center fs-1">
                        {tenThousandsDigit}
                    </div>
                </div>
                <div className="col-auto custom-column-size mx-2">
                    <div className="card text-light d-flex justify-content-center align-items-center fs-1">
                        {thousandsDigit}
                    </div>
                </div>
                <div className="col-auto custom-column-size mx-2">
                    <div className="card text-light d-flex justify-content-center align-items-center fs-1">
                        {hundredsDigit}
                    </div>
                </div>
                <div className="col-auto custom-column-size mx-2">
                    <div className="card text-light d-flex justify-content-center align-items-center fs-1">
                        {tensDigit}
                    </div>
                </div>
                <div className="col-auto custom-column-size mx-2">
                    <div className="card text-light d-flex justify-content-center align-items-center fs-1">                        
                        {unitDigit}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};