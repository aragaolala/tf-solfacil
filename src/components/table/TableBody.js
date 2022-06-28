import "./table.css"

export function TableBody ({
    value,
}){
    return (
        <tbody>
            <tr className="bodyTable">
            {value.map(item=><th className="tableBodyCell">{item}</th>)}
            </tr>
    </tbody>
    )
};