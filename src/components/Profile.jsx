import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Profile = ({ user, onLogout, onBackToTourguide }) => {
  const [profileData, setProfileData] = useState({
    name: '',
    language: 'Dutch',
    phone: '',
    emergency: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfileData(docSnap.data());
        } else {
          // Set default name from displayName
          setProfileData(prev => ({ ...prev, name: user.displayName || '' }));
        }
      }
      setLoading(false);
    };
    fetchProfileData();
  }, [user]);

  const handleSave = async () => {
    try {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        await setDoc(docRef, profileData);
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Error saving profile: " + error.message);
    }
  };

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      if (onLogout) {
        onLogout();
      }
    } catch (error) {
      console.error("Fout bij uitloggen:", error);
    }
  };

  const getLoginMethod = () => {
    if (user && user.providerData && user.providerData.length > 0) {
      const provider = user.providerData[0].providerId;
      if (provider === 'google.com') return 'Google';
      if (provider === 'apple.com') return 'Apple';
      if (provider === 'facebook.com') return 'Facebook';
      return 'Email';
    }
    return 'Email';
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      position: 'relative',
      background: 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)',
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      minHeight: '500px'
    }}>
      <button onClick={handleLogout} style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '10px 20px',
        backgroundColor: '#ff8a65',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#ff7043'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#ff8a65'}
      >
        Logout
      </button>
      <h1 style={{ color: '#2e7d32', marginBottom: '20px' }}>User Profile</h1>
      <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '10px' }}>
          <h2 style={{ color: '#2e7d32' }}>Inloggegevens</h2>
          <p><strong>E-mailadres:</strong> {user.email}</p>
          <p><strong>Gebruikersnaam:</strong> {user.displayName || 'Niet ingesteld'}</p>
          <p><strong>Wachtwoord:</strong> Verborgen</p>
          <p><strong>Inlogmethode:</strong> {getLoginMethod()}</p>
        </div>
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '10px' }}>
          <h2 style={{ color: '#2e7d32' }}>Profielinformatie</h2>
          <p><strong>Naam:</strong> {isEditing ? <input value={profileData.name} onChange={(e) => handleInputChange('name', e.target.value)} /> : profileData.name}</p>
          <p><strong>Taalvoorkeur:</strong> {isEditing ? <select value={profileData.language} onChange={(e) => handleInputChange('language', e.target.value)}>
            <option value="Dutch">Dutch</option>
            <option value="English">English</option>
          </select> : profileData.language}</p>
        </div>
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '10px' }}>
          <h2 style={{ color: '#2e7d32' }}>Contactgegevens</h2>
          <p><strong>Telefoonnummer:</strong> {isEditing ? <input value={profileData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} placeholder="Optioneel" /> : profileData.phone || 'Niet ingesteld'}</p>
          <p><strong>Noodgevallen-contact:</strong> {isEditing ? <input value={profileData.emergency} onChange={(e) => handleInputChange('emergency', e.target.value)} placeholder="Optioneel" /> : profileData.emergency || 'Niet ingesteld'}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          {isEditing ? <button onClick={handleSave} style={{ padding: '10px 20px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Opslaan</button> : <button onClick={() => setIsEditing(true)} style={{ padding: '10px 20px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Bewerken</button>}
        </div>
      </div>
      <br />
      <button onClick={onBackToTourguide} style={{
        padding: '10px 20px',
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#388e3c'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#4caf50'}
      >
        Back to Tourguide
      </button>
    </div>
  );
};

export default Profile;
