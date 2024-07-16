import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> The Weather App</h1>
        <Weather />
      </header>
      <p class="text-center mt-5">
        ✌️ This website was coded by Katlego Makgatle, and it is 
        <a href="https://github.com/KatlegoM02/reactapp" target="_blank">
          open-sourced
        </a>
      </p>
    </div>
  );
}

export default App;
