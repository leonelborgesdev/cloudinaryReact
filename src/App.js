import logo from "./logo.svg";
import "./App.css";
import { MultiplesImagenes } from "./components/Multiplesimagenes/MultiplesImagenes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sale } from "./components/Sale/Sale";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultiplesImagenes />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
