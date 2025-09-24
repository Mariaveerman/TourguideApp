import React from "react";
import Login from "./components/Login";

const App = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      height: '100vh',
      width: '100vw',
      position: 'relative'
    }}>
      <Login />
    </div>
  );
};

export default App;
