import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [state,setState] = useState(false);
  return (
    <div>
    {
        para ? <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> : ""}
    }
    <button id="click" onclick={()=> setState(!para)}> Click </button>
    </div>
  );
}


export default App;
