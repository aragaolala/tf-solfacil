/* eslint-disable no-lone-blocks */
import "./table.css"

export function TableBody ({
data,
}){
    return (
        <tbody>
            <tr className="bodyTable">
            <th className="tableBodyCell">{data}</th>
            </tr>
    </tbody>
    )
};

{/* <tr className="bodyTable">
{data.map(item=><th className="tableBodyCell">{item}</th>)}
</tr> */}