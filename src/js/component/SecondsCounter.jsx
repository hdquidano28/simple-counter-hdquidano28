import React, { useState, useEffect }from "react";

export const SecondsCounter = () => {
    const [count, setCount] = useState(0); 
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => (prevCount < 99 ? prevCount + 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const leftDigit = Math.floor(count / 10);
    const rightDigit = count % 10;
    

    return(
        <>
        
        <div className="container text-center">
            <div className="row">
                <div className="col-6">
                    {leftDigit}
                </div>
                <div className="col-6">
                    {rightDigit}
                </div>
            </div>
        </div>
        </>
    );
    
};