/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable-next-line */
import React, { useState, useEffect, useMemo } from 'react';
import axios from "axios";
import { Table } from "../../components/table/Table";
import { Overrall } from "../../components/overrall/Overrall.js";
import { Header } from "../../components/header/Header.js";
import { Footer } from '../../components/footer/Footer.js';

const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://mocki.io/v1/5fcf051d-2867-4698-8c1c-df076b4d2948')
      .then((response) => {
        // console.log(Object.values(response.data))
        setPosts(response.data.detalhes);
      })
      .catch(() => {
        console.log("ERRRRRRRROU")
      })
  }, [])

  const [cessao, setCessao] = useState({});

  useEffect(() => {
    axios.get('https://mocki.io/v1/5fcf051d-2867-4698-8c1c-df076b4d2948')
      .then((response) => {
        console.log(response.data.cessao)
        setCessao(response.data.cessao);
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
          {/*  */}

          {Object.keys(cessao).length !== 0 &&
            <div className="sumContainers">
              <h2 className="totalSumTitle"> Total Formalizações </h2>
              <Overrall value={"Financiamento"}
                className="sumContainer"
                pf={cessao.pf.financiado}
                pj={cessao.pj.financiado}
                total={cessao.total.financiado}
              />

              <Overrall value={"Bruto"}
                className="sumContainer"
                pf={cessao.pf.bruto}
                pj={cessao.pj.bruto}
                total={cessao.total.bruto}
              />

              <Overrall value={"Aquisição"}
                className="sumContainer"
                pf={cessao.pf.aquisicao}
                pj={cessao.pj.aquisicao}
                total={cessao.total.aquisicao}
              />
            </div>
          }

        </section>

        <section className="tableContainer">
          <Table posts={posts} />
        </section>

      </main>
      <Footer />



    </>
  );
};

export default Feed;
