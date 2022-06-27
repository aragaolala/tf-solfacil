export function TableBody ({
    value,
}){
    return (
        <tbody>
            <tr>
            {value.map(item=><th>{item}</th>)}
            </tr>
    </tbody>
    )
};