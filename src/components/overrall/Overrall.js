import "./style.css"

export function Overrall ({
    value
})
{
    return(
        <>
        <div className="sumContainer">
        <h3 className="sumTitle"> Valor {value} </h3>
                <div className="totalSum">   PF R${value}</div>
                <div className="totalSum">   PJ R${value}</div>
            
        <p className="GlobalSumResult">  Total R$ {value} </p>
        </div>
        </>
        
    )
}

