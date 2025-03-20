import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeButton(){
    const theme = useContext(ThemeContext);

    return(
        <>
    <button style={{background : theme === "light" ? "grey" : "yellow",color : theme === "light" ? "white" : "black"}}>
        Button with {theme}
    </button>
    </>
    )
    
}

export default ThemeButton;