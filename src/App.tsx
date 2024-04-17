import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Full from "./Navbar"
import Satisfaction from "./Satisfaction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Full />}>
          <Route path="/Satisfaction" element={<Satisfaction />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
