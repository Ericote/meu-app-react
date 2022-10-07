//import logo from './logo.svg';
import { ButtonBase } from "@mui/material";
import "./App.css";
import Contador from "./components/Contador";
import FetchNews from "./components/FetchNews";
import FetchProducts from "./components/FetchProducts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Mundo</h1>
        <FetchProducts/>
        {/*<FetchNews />
        <Contador />*/}
      </header>
    </div>
  );
}

export default App;
