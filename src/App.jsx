import { useState } from 'react'
import './App.css'
import Hello from "./components/hello.jsx";
import Greeting from "./components/greetings.jsx";
import Guten from "./components/guten.jsx";
import Follow from "./components/follow.jsx";

function App() {
  return (
    <div className="App">
      <Guten name="Jirbthagoras"/>
        <Follow/>
    </div>
  )
}

export default App
