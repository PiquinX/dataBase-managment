export function Title ({brandName, addMeessage}){
    return (
        <div className="titles-container">
            <div className="brandname-container" >
                <h1>{brandName}</h1>
            </div>
                
            <h3>{addMeessage}</h3>
        </div>
    )
}