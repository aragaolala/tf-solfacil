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
          <table className="table">
            <thead>
              <tr className="headerTable">
                <th className="tableHeaderCell"></th>
              </tr>
            </thead>
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
