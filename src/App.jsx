import React, { useState } from "react";
import Navbar from "./Components/navbar";
import NewsBoard from "./Components/NewsBoard";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
};

export default App;
