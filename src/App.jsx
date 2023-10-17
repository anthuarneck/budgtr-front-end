import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Index from "./pages/Index";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
