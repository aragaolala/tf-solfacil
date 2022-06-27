import "./App.css";
import axios from "axios";

function App() {
  const getApi = () => {
    axios
      .get("https://mocki.io/v1/5fcf051d-2867-4698-8c1c-df076b4d2948")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="teste">
      <button onClick={getApi}>Get API</button>
    </div>
  );
}

export default App;
