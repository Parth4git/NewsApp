import React from "react";
import "./App.css";
import { useState } from "react";
import Navbar from "./Components/navbar";
import NewBoard from "./Components/newBoard";

function App() {
  const [categories, setCategories] = useState("general");
  return (
    <>
      <Navbar setCategories={setCategories} />
      <NewBoard categories={categories} />
    </>
  );
}

export default App;
