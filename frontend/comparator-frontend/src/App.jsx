import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
      <Router>
        <Routes>
            <Route path={"/login"} element={<Login />} />
            <Route path={"/home"} element={<Home />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
