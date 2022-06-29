import { TableHead } from "../table/TableHead";
import { TableBody } from "../table/TableBody";
import "./table.css"
// import { useState, useEffect } from "react";
// import axios from "axios";

export function Table() {
  return (
    <>
      <table className="table">
        <TableHead value= {['', '', '', '','',' ']} />
        
        <TableBody value= {['', '', '', '','','']} />
        <TableBody value= {['', '', '', '','','']} />
        <TableBody value= {['', '', '', '','','']} />
        <TableBody value= {['', '', '', '','','']} />
        <TableBody value= {['', '', '', '','','']} />
      </table>
    </>
  );
}
