import React from "react";
import { db, auth } from "../firebase"; // 🔗 importeer de db en auth uit firebase.js
import { collection, addDoc } from "firebase/firestore"; // ✅ importeer functies die je nodig hebt
import { signOut } from "firebase/auth"; // ✅ importeer signOut voor logout

const Tourguide = ({ onLogout }) => {
  const handleSave = async () => {
    try {
      await addDoc(collection(db, "Tourguide"), {
        Tourguide: "jooooo",
      });
      console.log("Data toegevoegd!");
    } catch (error) {
      console.error("Fout bij toevoegen:", error);
    }
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

  return (
    <div style={{ padding: '20px', textAlign: 'center', position: 'relative' }}>
      <button onClick={handleLogout} style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '10px 20px',
        backgroundColor: '#ff4444',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Logout
      </button>
      <h1>Welcome to Tourguide App!</h1>
      <p>You are logged in!</p>
      <button onClick={handleSave} style={{ marginRight: '10px', padding: '10px 20px' }}>
        Save Data
      </button>
      <br /><br />
      <button onClick={onLogout} style={{ padding: '10px 20px', backgroundColor: '#666', color: 'white', border: 'none', borderRadius: '5px' }}>
        Back to Login Page
      </button>
    </div>
  );
};

export default Tourguide;
