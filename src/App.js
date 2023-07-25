import logo from "./logo.svg";
import "./App.css";
import { MultiplesImagenes } from "./components/Multiplesimagenes/MultiplesImagenes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultiplesImagenes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
