import { Table } from "./components/table/Table";
import { Overrall } from "./components/overrall/Overrall.js";
import { Header } from "./components/header/Header.js";
import { Footer } from './components/footer/Footer.js';

const Feed = () => {

  return (
    <>
      <main className='feedContainer'>

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
      </main>
      <Footer />
    </>



  )
}

export default Feed;

