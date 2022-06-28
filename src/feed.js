import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {Table} from "./components/Table.js";
import {Overrall} from "./components/Overrall.js";
import {Header} from './components/Header.js';
import {Footer} from './components/Footer.js';

// https://jsonplaceholder.typicode.com/posts

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
          axios.get('https://mocki.io/v1/5fcf051d-2867-4698-8c1c-df076b4d2948') 
          .then((response)=>{
            console.log(response.data.cessao)
            setPosts(response.data.detalhes);
          })
          .catch(()=> {
            console.log("ERRRRRRRROU")
          })
        }, [])

  return (

    <><main className='feedContainer'>

      <Header />

      <section className="tableUpperContent">
        <h2>  Total Formalizações </h2>

        <div className="sumContainers">
          <Overrall value={'Financiamento'}
            className='sumContainer' />
          <Overrall value={'Bruto'}
            className='sumContainer' />
          <Overrall value={'Aquisição'}
            className='sumContainer' />
        </div>
      </section>

      <section className="tableContainer">
        <Table />
      </section>
      <div>
        
        {posts.map((post) => {
          return (
            <div>
              <h2 className="post-body">{post.nomeCompleto}</h2>
              <h2 className="post-title">{post.cpf}</h2>
              <p className="post-body">{post.cet}</p>
              <p className="post-body">{post.id}</p>
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
      <Footer />


    </main></> 
    

  )
}

export default Feed;

