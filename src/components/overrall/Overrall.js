import "./style.css"

export function Overrall ({
    value,
    pf,
    pj,
    total
})
{
    return(
        <>
        <div className="sumContainer">
            
            <div className="totalSumContainer">
            <h3 className="sumTitle"> Valor {value} </h3>
               
               <div className="totalSumBox">
               <div className="totalSum">PF R${pf}</div>
                <div className="totalSum">PJ R${pj}</div>
               </div>
                
                <p className="GlobalSumResult">  Total R$ {total} </p>
        </div>  
            
        
        </div>
        </>
        
    )
}


