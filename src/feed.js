/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable-next-line */
import React, { useState, useEffect, useMemo } from 'react';
import axios from "axios";
import { Table } from "./components/table/Table";
import { Overrall } from "./components/overrall/Overrall.js";
import { Header } from "./components/header/Header.js";
<<<<<<< HEAD
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

=======
import { Footer } from './components/footer/Footer.js';
import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://mocki.io/v1/5fcf051d-2867-4698-8c1c-df076b4d2948')
      .then((response) => {
        console.log(Object.values(response.data))
        setPosts(response.data.detalhes);
      })
      .catch(() => {
        console.log("ERRRRRRRROU")
      })
  }, [])
>>>>>>> 9da054dddffa05db768be65807c1a1d277945531

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
<<<<<<< HEAD
      {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
        <Table columns={columns} data={data} />
      )}
        </section>
        
=======
          <Table posts={posts} />
        </section>

        <div>

          {posts.map((post) => {
            return (
              <div key={post.id}>
                <h2 className="post-body">{post.nomeCompleto}</h2>
                <h2 className="post-title">{post.cpf}</h2>
                <p className="post-body">{post.cet}</p>
                <p className="post-body">{post.id} -id </p>
                <p className="post-body">{post.numCcb}</p>
                <p className="post-body">{post.tipo}</p>
                <p className="post-body">{post.parcelas}</p>
                <p className="post-body">{post.valorAquisicao}</p>
                <p className="post-body">{post.valorBruto}</p>
                <p className="post-body">{post.valorFinanciado}</p>
              </div>
            );
          }
          )}
        </div>

>>>>>>> 9da054dddffa05db768be65807c1a1d277945531
      </main>
      <Footer />

    
      
    </>
  );
};

export default Feed;
