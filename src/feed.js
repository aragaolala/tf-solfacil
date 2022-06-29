/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable-next-line */
import React, { useState, useEffect, useMemo } from 'react';
import axios from "axios";
import { Table } from "./components/table/Table";
import { Overrall } from "./components/overrall/Overrall.js";
import { Header } from "./components/header/Header.js";
import { Footer } from './components/footer/Footer.js';

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
          <Table posts={posts} />
        </section>

        <div>

          {/* {posts.map((post) => {
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
          )} */}
        </div>

      </main>
      <Footer />

    
      
    </>
  );
};

export default Feed;
