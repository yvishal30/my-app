// function Item({name,isPacked}){
   
//        if(isPacked){
//         return <li className="item">{name} ☑️</li>
//        }
//        else{
//         return <li className="item">{name} ❌</li>
//        }
// }

function Item({name,isPacked}){
   return(
    <li className="item">
        {
            isPacked ? 
            (<del>
                {name + '☑️'}
            </del>
            ):(name)
        }
    </li>
   )
}

function PackingList(){
    return(
        <>
        <h1>Track Packing List</h1>
        <ul>
            <Item isPacked={true} name="Watter Bottle"/>
            <Item isPacked={true} name="Towels"/>
            <Item isPacked={false} name="Clothes"/>
        </ul>
        </>
    )
}

export default PackingList;