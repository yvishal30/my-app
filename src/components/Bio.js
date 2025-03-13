function Bio({languages,tools}){
    return(
        <div>
            <center>
        <div className="intro">
            <h1>
                Welcome to my website!
            </h1>
            <h3>Language Used : {languages}</h3>
            <p><i>By : {tools}</i></p>
        </div>
        <p className="summary">
            You can find my thoughts here.
            <br></br>
            <b>And <i>pictures</i> of Goku & Avatar</b>
        </p>
        </center>
        </div>
    );
}

export default Bio;