import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Profile = ({ user, onLogout, onBackToTourguide }) => {
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
      <h1>User Profile</h1>
      {user && (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          {user.displayName && <p><strong>Name:</strong> {user.displayName}</p>}
        </div>
      )}
      <br />
      <button onClick={onBackToTourguide} style={{ padding: '10px 20px', backgroundColor: '#666', color: 'white', border: 'none', borderRadius: '5px' }}>
        Back to Tourguide
      </button>
    </div>
  );
};

export default Profile;
