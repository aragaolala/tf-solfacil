/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable-next-line */
import React, { useState, useEffect, useMemo } from 'react';
import axios from "axios";
import { Table } from "./components/table/Table";
import { Overrall } from "./components/overrall/Overrall.js";
import { Header } from "./components/header/Header.js";
import { Footer } from "./components/footer/Footer.js";


const Feed = () => {

  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const columns = useMemo(()	=>[
    {  key: 1,Header: "Nome do Cliente", accessor: "nomeCompleto" },
    {  key: 2,Header: "Valor Bruto", accessor: "valorBruto" },
    {  key: 3,Header: "Valor Financiado", accessor: "valorFinanciado" },
    {  key: 4, Header: "Valor de Aquisição", accessor: "valorAquisicao"},
    {  key: 5,Header: "Nº CCB", accessor: "numCcb"},
    {  key: 6,Header: "Prazo", accessor: "prazo"},
  ]);

  useEffect(() => {
    async function getData() {
      await axios
        .get("https://mocki.io/v1/5fcf051d-2867-4698-8c1c-df076b4d2948")
        .then((response) => {
          // check if the data is populated
          console.log(response.data.detalhes);
          setData(response.data.detalhes);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);


  return (
    <>
      <main className="feedContainer">
        <Header />

        <section className="tableUpperContent">
          <h2> Total Formalizações </h2>

          <div className="sumContainers">
            <Overrall value={"Financiamento"} className="sumContainer" />
            <Overrall value={"Bruto"} className="sumContainer" />
            <Overrall value={"Aquisição"} className="sumContainer" />
          </div>
        </section>

        <section className="tableContainer">
      {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
        <Table columns={columns} data={data} />
      )}
        </section>
        
      </main>
      <Footer />

    
      
    </>
  );
};

export default Feed;
