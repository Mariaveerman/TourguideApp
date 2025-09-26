import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Location from "./pages/location";


const App = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      height: '100vh',
      width: '100vw',
      position: 'relative'
    }}>
       <Router>
      <Routes>
      <Route path="/Login" element={<Login />} />
      </Routes>
          </Router>
          <Router>
      <Routes>
      <Route path="/locatie" element={<Location />} />
      </Routes>
          </Router>
    </div>
  );
};

export default App;
