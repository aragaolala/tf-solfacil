import {Table} from "./components/table/Table";
import{Overrall} from "./components/Overrall.js";
import {Header} from './components/Header.js';
import {Footer} from './components/Footer.js';

const Feed = () => {

  return (

    <main className='feedContainer'>
      
    <Header />
    
    <section className="tableUpperContent">
      <h2>  Total Formalizações </h2>

      <div className="sumContainers">
        <Overrall value={'Financiamento'}
        className='sumContainer' />
        <Overrall value={'Bruto'} 
        className='sumContainer'/>
        <Overrall value={'Aquisição'} 
        className='sumContainer'/>
      </div>
    </section>

    <section className="tableContainer">
        <Table />
    </section>
      
    <Footer />
    </main>
    
    

  )
}

export default Feed;

