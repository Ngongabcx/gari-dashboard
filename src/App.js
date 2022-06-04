import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import './App.css';
import { Create, CreateCompany } from "./pages/companies/Create.jsx";
import { CreateSalvage } from "./pages/salvages/Create.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/create-company' element={<CreateCompany/>}/>
        <Route path='/create-salvage' element={<CreateSalvage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
