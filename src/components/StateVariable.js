import {useState} from "react";

function StateVariable(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("")

    return(
        <>
        <br></br>
        <center>
        <h3>User Profile</h3>
        <div>
            <h6>Name: </h6><input type="text" id="nameTB" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
            <h6>Age: </h6><input type="number" id="ageTB" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)}></input>
            <h6>Email: </h6><input type="email" id="emailTB" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br/>

        </div>
        <br>
        </br>

        <div>
            <h4>Preview</h4><br/>
            <h6>Name : {name}</h6>
            <h6>Age : {age}</h6>
            <h6>Email : {email}</h6>
        </div>
        </center>
        </>
    )
}

export default StateVariable;