import {Table} from "./components/Table.js";
import{Overrall} from "./components/Overrall.js";


const Feed = () => {

  return (

// Aqui entraria o component Header
    <>
    <section className="tableUpperContent">
      <h2>  Total Formalizações </h2>

      <div className="sumContainers">
        <Overrall value={'Financiamento'} />
        <Overrall value={'Bruto'} />
        <Overrall value={'Aquisição'} />
      </div>
    </section>
    
    <section className="tableContainer">
        <Table />
    </section>
    </>
// Aqui entraria o component Footer

  )
}

export default Feed;

