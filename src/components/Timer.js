import { useState, useEffect } from "react";

function Timer(){
    const[seconds, setSeconds] = useState(0);

    useEffect(() =>{
        const intervals = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        },1000);

        return () => clearInterval(intervals);
    }, []);

    return(
        <>
        <h1>Seconds Timer : {seconds}</h1>
        </>

    )
}

export default Timer;