// import { TableHead } from "../table/TableHead";
// import { TableBody } from "../table/TableBody";
import "./table.css"


export function Table({
  columns,
  data
}) {
  return (
    <>
      <table className="table">
        <thead>
        <tr className="headerTable">
          <th className="tableHeaderCell">{columns}</th>
        </tr>
        </thead>
        <tbody>
            <tr className="bodyTable">
            <th className="tableBodyCell">{data}</th>
            </tr>
    </tbody>
      </table>
    </>
  );
}
