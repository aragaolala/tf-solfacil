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
                <th className="tableBodyCell">{post.nomeCompleto}</th>
                <th className="tableBodyCell">R$ {post.valorFinanciado}</th>
                <th className="tableBodyCell">R$ {post.valorBruto}</th>
                <th className="tableBodyCell">R$ {post.valorAquisicao}</th>
                <th className="tableBodyCell">
                  {post.parcelas}
                  <th>{post.cet}</th>
                </th>
                <th className="tableBodyCell">{post.numCcb}</th>
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