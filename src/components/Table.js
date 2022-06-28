import { TableHead } from "../components/TableHead.js";
import { TableBody } from "../components/TableBody.js";
// import { useState, useEffect } from "react";
// import axios from "axios";

export function Table({data}) {
  return (
    <>
      <table className="table">
        <TableHead value= {['Nome do Cliente', 'Valor Financiado', 'Valor Bruto', 'Valor de aquisição','Prazo','Nº CCB']} />
        
        <TableBody value= {['Fulano', 'R$40.000,00', 'R$40.000,00', 'R$40.000,00','48x','124124214']} />
        <TableBody value= {['Fulano', 'R$40.000,00', 'R$40.000,00', 'R$40.000,00','48x','124124214']} />
        <TableBody value= {['Fulano', 'R$40.000,00', 'R$40.000,00', 'R$40.000,00','48x','124124214']} />
        <TableBody value= {['Fulano', 'R$40.000,00', 'R$40.000,00', 'R$40.000,00','48x','124124214']} />
        <TableBody value= {['Fulano', 'R$40.000,00', 'R$40.000,00', 'R$40.000,00','48x','124124214']} />
      </table>
    </>
  );
}
