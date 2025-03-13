function Button(){
    function handleButton(){
        alert("You clicked me !!")
    }

    return(
        <button onClick ={()=>{handleButton()}}>
            Click Me !
        </button>
    )
    
}

export default Button;