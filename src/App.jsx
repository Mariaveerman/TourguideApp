import React from "react";
import Login from "./components/Login";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState('tourguide');

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
    if (currentView === 'tourguide') {
      return <Tourguide onLogout={() => setUser(null)} onGoToProfile={() => setCurrentView('profile')} />;
    } else if (currentView === 'profile') {
      return <Profile user={user} onLogout={() => setUser(null)} onBackToTourguide={() => setCurrentView('tourguide')} />;
    }
  }

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
