import { useState } from 'react'
import React from 'react';
import './App.css'
import LeftBar from './Components/LeftBar';
import penguins from './penguins.png'

function App() {

  return (
    <>
      <div className = "leftbar">
      <LeftBar/>
      </div>
      <div className = "main">
      <h1> Welcome To The Penguin Creator</h1>
      <p>This is where you can create your own penguin from a game so dear to all of our childhoods!</p>
      <img src = {penguins} alt = "penguins"/>
      </div>
    </>
  )
}

export default App
