// import { TableHead } from "../table/TableHead";
// import { TableBody } from "../table/TableBody";
import "./table.css"
// import { useState, useEffect } from "react";
// import axios from "axios";

export function Table({ posts }) {
  return (
    posts.map((post) => {
      return (
        <>
            <thead>
              <tr className="headerTable">
                <th className="tableHeaderCell"></th>
              </tr>
            </thead>
          <table className="table">
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
