import React from "react";
import './App.css';

import Posts from "./compoents/Posts"
import Navbar from "./compoents/BlogNav"

const App = () => {
  return (
    <div className="main-container" style={{backgroundColor:"aliceblue"}}>
      <Navbar />
      <Posts />

    </div>
     
  );
};
export default App;