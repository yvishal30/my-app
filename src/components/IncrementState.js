import {useState} from "react";
function IncrementState(){
    let [count, setCount] = useState(0)

    function handleIncrement(){
        setCount(count + 1)
    }

    function handleDecrement(){
        setCount(count - 1)
    }

   
    return(
        <>
        <center>
        <button type="button" class="btn btn-success" onClick={handleDecrement}>-</button>
        <h1>{count}</h1>
        <button type="button" class="btn btn-danger" onClick={handleIncrement}>+</button>
        <br></br>
        </center>
        
        </>
    )
}

export default IncrementState;