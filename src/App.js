import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import Banner from "./components/Banner/index.js";
import Home from "./pages/Home/index.js";
import ErrorPage from "./pages/Erreur/index.js";
import OneTemplate from "./pages/onTemp";
import './App.css';
// import Template from "./pages/Template/index.jsx";
// import { getAverageTemplatesDigicab } from "./components/Fetch";

async function getTemplates() {
  let response = await fetch("/templatesDigiCab.json")
  let dataTemplates = await response.json()

  return dataTemplates
}

function App() {
  const [templates, setTemplates] = useState([])

  useEffect(() => {
    getTemplates().then((data) => {
      setTemplates(data)
    })
  }, [])

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home templates={templates} />} />
          <Route path="/template/:id" element={<OneTemplate templates={templates}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* <Foot />  */}
      </Router>
    </React.StrictMode>
  );
}

export default App;
