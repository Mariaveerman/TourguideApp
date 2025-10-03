import React, { useState } from "react";
// import { db } from "../firebase"; // 🔗 importeer de db uit firebase.js
// import { collection, addDoc } from "firebase/firestore"; // ✅ importeer functies die je nodig hebt

const GPS = () => {
  const [message, setMessage] = useState("");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const handleSave = async () => {
     if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);

    } else {
        setMessage("Geolocation is not supported by this browser.");
    }
  };

  function success(position) {
    const currentLat = position.coords.latitude;
    const currentLon = position.coords.longitude;
    setLat(currentLat);
    setLon(currentLon);
    console.log(`Latitude: ${currentLat}, Longitude: ${currentLon}`);

    if(currentLat >= 51.8 && currentLat <= 52.2 && currentLon >= 4 && currentLon <= 5) {
      setMessage(`Je hebt het Hoornbeeck bereikt!`);
    } else {
      setMessage(`Nog even wachten tot het Hoornbeeck.`);
    }
  }
  return (
    <div>
      <h2>GPS Locatie</h2>
      <button onClick={handleSave}>Locatie Opvragen</button>
      <p>{message}</p>
      {lat && lon && (
        <iframe
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${lon-0.01}%2C${lat-0.01}%2C${lon+0.01}%2C${lat+0.01}&layer=mapnik&marker=${lat}%2C${lon}`}
          width="100%"
          height="300"
          style={{ border: '1px solid black', maxWidth: '400px' }}
          title="Locatie Kaart"
        ></iframe>
      )}
    </div>

  );
};

export default GPS;
