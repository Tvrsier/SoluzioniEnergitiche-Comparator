import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Dashboard from "./views/DashboardView";

function App() {
  return (
      <Router>
        <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/home"} element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
