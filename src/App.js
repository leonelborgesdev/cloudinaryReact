import logo from "./logo.svg";
import "./App.css";
import { MultiplesImagenes } from "./components/Multiplesimagenes/MultiplesImagenes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sale } from "./components/Sale/Sale";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<MultiplesImagenes />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
