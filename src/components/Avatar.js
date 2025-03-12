function Avatar({person,size}){
    const avatar = "https://media.vanityfair.com/photos/5f5245d91e10df7a77868af6/1:1/w_1332,h_1333,c_limit/avatar-the-last-airbender.jpg"
    const description="Avatar Group Image"

    return(
        <>
        <center>
            <h2>{person.name}</h2>
        <img className="Avatar" 
        src={avatar} 
        width={size} height={size}
        alt={description}>
        </img>
        </center>
        </>
    )
}

export default Avatar;