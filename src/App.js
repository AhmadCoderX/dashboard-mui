import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard";
import { Box } from "@mui/material";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
