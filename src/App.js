import Table from "../src/components/Table.js";

function App() {

// Labels já de acordo com os dados da API ↓

  const columns = [
    { label: "Nome do cliente", accessor: "nomeCompleto", sortable: true },
    { label: "Valor financiado", accessor: "valorFinanciado", sortable: true },
    { label: "Valor Bruto", accessor: "valorBruto", sortable: true, sortbyOrder: "desc" },
    { label: "Valor de aquisição", accessor: "valorAquisicao", sortable: true },
    { label: "Prazo", accessor: "parcelas", sortable: true },
    { label: "Nº CCB", accessor: "numCcb", sortable: true },
  ];

  return (
    <>
  <div className="table_container">
      <Table
        caption=""
        // data={}
        columns={columns} />
      <br />
      <br />
    </div>
    </>
  );
}

export default App;
