import React from 'react'
import "./App.css"
import va from "./assets/ai.png"
import { CiMicrophoneOn } from "react-icons/ci";
const App = () => {
  return (
   <>
   <div className="main">
    <img src={va} alt="" id="Navya" />
    <span> I'm Navya,Your Advance Virtual Assistant</span>
    <button>click here<CiMicrophoneOn /></button>
   </div>
   </>
  )
}

export default App
