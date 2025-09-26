import React from "react";
// import { db } from "../firebase"; // 🔗 importeer de db uit firebase.js
// import { collection, addDoc } from "firebase/firestore"; // ✅ importeer functies die je nodig hebt

const GPS = () => {

  const x = document.getElementById("demo");

  const handleSave = async () => {
     if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
    
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  };
  
  function success(position) {
    
    if(position.coords.latitude >= 52 && position.coords.latitude <= 52.02 
      && position.coords.longitude >= 4 && position.coords.longitude <= 5)
    {
      console.log("je hebt het hoornbeeck berijkt");
    } else {
      console.log("nog even wachten tot het hoornbeeck");
    }
}
  return (
    <div>
      <h1>Firebase Test in React</h1>
      <button onClick={handleSave}>Opslaan</button>
      
    </div>
    
  );
};

export default GPS;
