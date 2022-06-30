import { TableHead } from "../table/TableHead";
import "./table.css"

export function Table({ posts } , i) {

  return (
    <>
      <table className="table" key={i}>
        < TableHead value={['Nome do Cliente', 'Valor Financiado', 'Valor Bruto', 'Valor de aquisição', 'Prazo', 'Nº CCB']} />
        {posts.map((post) => {
          return (
            <tbody key={post.id}>
              <tr className="bodyTable">
                <th className="tableBodyCell">{post.nomeCompleto}</th>
                <th className="tableBodyCell">R$ {post.valorFinanciado}</th>
                <th className="tableBodyCell">R$ {post.valorBruto}</th>
                <th className="tableBodyCell">R$ {post.valorAquisicao}</th>
                <th className="tableBodyCell">
                  <p> {post.parcelas}x </p>
                  <p style={{ fontSize: 10 }}> {post.cet} </p>
                </th>
                <th className="tableBodyCell">{post.numCcb}</th>
              </tr>
            </tbody>
          )
        })}
      </table>
    </>
  )
}
