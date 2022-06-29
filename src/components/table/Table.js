import { TableHead } from "../table/TableHead";
import { TableBody } from "../table/TableBody";
import "./table.css"


export function Table({
  columns,
  data
}) {
  return (
    <>
      <table className="table">
        <TableHead columns={columns} />
        <TableBody data={data}/>
        <TableBody data={data}/>
        <TableBody data={data}/>
        <TableBody data={data}/>
        <TableBody data={data}/>
      </table>
    </>
  );
}
