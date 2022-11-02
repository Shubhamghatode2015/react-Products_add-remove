import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Navbaar from "./components/Navbaar";

import ProdList from "./components/ProdList";
import Products from "./components/Products";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Navbaar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/prodlist" element={<ProdList />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
