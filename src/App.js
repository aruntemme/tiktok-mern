import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>
        hello <span role="img">😻</span>
      </h1>
      <div className="app__videos">
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
