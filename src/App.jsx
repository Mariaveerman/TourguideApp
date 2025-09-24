import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Tourguide from "./components/Tourguide";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSuccess = () => {
    setUser(auth.currentUser);
  };

  const handleSignupSuccess = () => {
    setUser(auth.currentUser);
  };

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>;
  }

  if (user) {
    return <Tourguide onLogout={() => setUser(null)} />;
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      height: '100vh',
      width: '100vw',
      position: 'relative'
    }}>
      {isLogin ? <Login onToggle={toggleForm} onLoginSuccess={handleLoginSuccess} /> : <Signup onToggle={toggleForm} onSignupSuccess={handleSignupSuccess} />}
    </div>
  );
};

export default App;
