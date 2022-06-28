import "./style.css"

export function Overrall ({
    value
})
{
    return(
        <>
        <div className="sumContainer">
            
            <div className="totalSumContainer">
            <h3 className="sumTitle"> Valor {value} </h3>
               <div className="totalSumBox">
               <div className="totalSum">PF R${value}</div>
                <div className="totalSum">PJ R${value}</div>
               </div>
                
                <p className="GlobalSumResult">  Total R$ {value} </p>
        </div>  
            
        
        </div>
        </>
        
    )
}

