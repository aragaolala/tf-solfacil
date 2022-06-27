//import Table from "../src/components/Table.js";
import Login from "./Pages/Login/login";

function App() {

  // Precisa mudar as etiquetas (labels) da tabela em função dos dados da API
  // Esse é só um exemplo de como funciona ↓
  /*const columns = [
    { label: "Full Name", accessor: "full_name", sortable: true },
    { label: "Email", accessor: "email", sortable: false },
    { label: "Gender", accessor: "gender", sortable: true, sortbyOrder: "desc" },
    { label: "Age", accessor: "age", sortable: true },
    { label: "Start date", accessor: "start_date", sortable: true },
  ];*/

  return (
    <>
    <Login />
      {/*<div className="table_container">
        <h1>Tabela para Ordenação</h1>
        <Table
          caption="Ordenação Asc-Desc por nome ou valor numérico"
          // data={}
          columns={columns} />
        <br />
        <br />
  </div>*/}
    </>
  );
}

export default App;
