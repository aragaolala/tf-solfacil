export function Overrall ({
    value
})
{
    return(
        <>
        <h3> Valor {value} </h3>
                <div className='totalSum'>   PF R${value}</div>
                <div className='totalSum'>   PJ R${value}</div>
            
        <p className='GlobalSumResult'>  Total R$ {value} </p>
        </>
        
    )
}

