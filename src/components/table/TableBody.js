import "./table.css"

export function TableBody ({
    value,
}){
    return (
        <tbody>
            <tr className="bodyTable">
            {value.map((item, i)=><th key={i} className="tableBodyCell">{item}</th>)}
            </tr>
    </tbody>
    )
};