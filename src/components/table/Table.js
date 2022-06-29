import { TableHead } from "../table/TableHead";
// import { TableBody } from "../table/TableBody";
import "./table.css"

export function Table({
  posts }) {
  return (
    posts.map((post) => {
      return (
        <>
          <table className="table">
          <TableHead value= {['Nome do Cliente', 'Valor Financiado', 'Valor Bruto', 'Valor de aquisição','Prazo','Nº CCB']} />
            <tbody>
              <tr className="bodyTable">
                <th className="tableBodyCell">{post.cpf}</th>
              </tr>
            </tbody>
          </table>
        </>
      )
    })
  )
}
            {/* <thead>
              <tr className="headerTable">
              {value.map(item=><th className="tableHeaderCell">{item}</th>)}
              </tr>
            </thead> */}