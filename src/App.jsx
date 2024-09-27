import { useState } from 'react'
import './App.css'
import Hello from "./components/hello.jsx";
import Greeting from "./components/greetings.jsx";
import Guten from "./components/guten.jsx";

function App() {
  return (
    <div>
      <Hello/>
      <Greeting/>
      <Guten name="Jabriel"/>
    </div>
  )
}

export default App
