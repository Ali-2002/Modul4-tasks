import React, { useState, useEffect } from "react";
import "./Dice.css"
const Dice = () => {
 
  const [state,setState]=useState(null);

  useEffect(() => {
    window.addEventListener("keypress", onKeypress);
    return ()=>{
        window.removeEventListener("keypress",onKeypress);
    }
  },[]);
  
  const onKeypress = (event) => {
    if (event.key === " ") {
      setState(Math.floor(Math.random() * 6) + 1 );
    }
  };

  const rollthedice = () => {
     setState(Math.floor(Math.random() * 6) + 1 );
  };

  return (
    <div className="app">
      <div onClick={rollthedice} className="dice">
        {state}
      </div>
    </div>
  );
};

export default Dice;
