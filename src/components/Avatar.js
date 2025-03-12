function Avatar(){
    const avatar = "https://media.vanityfair.com/photos/5f5245d91e10df7a77868af6/1:1/w_1332,h_1333,c_limit/avatar-the-last-airbender.jpg"
    const description="By Vishal Yadav"
    return(
        <>
        <center>
        <img className="Avatar" 
        src={avatar} width="800" height="600"
        alt={description}>
        </img>
        </center>
        </>
    )
}

export default Avatar;