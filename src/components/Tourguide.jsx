import React from "react";
import { db } from "../firebase"; // 🔗 importeer de db uit firebase.js
import { collection, addDoc } from "firebase/firestore"; // ✅ importeer functies die je nodig hebt

const Tourguide = () => {
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

  return (
    <div>
      <h1>Firebase Test in React</h1>
      <button onClick={handleSave}>Opslaan</button>
    </div>
  );
};

export default Tourguide;
