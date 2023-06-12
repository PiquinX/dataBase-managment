export function Title ({brandName, addMeessage}){
    return (
        <>
            <div className="brandname-container" tabIndex="1">
                <h1>{brandName}</h1>
            </div>
                
            <h3>{addMeessage}</h3>
        </>
    )
}