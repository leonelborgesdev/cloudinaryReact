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
          <Route path="/products" element={<MultiplesImagenes />} />
          <Route path="/sales" element={<Sale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
