import React from 'react'
import LeftBar from './LeftBar'
import cpenguin from './Images/cpenguin.png'
import { useState, useEffect } from 'react'
import './components.css'
import {supabase} from '../client'

export default function Create() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [nickname, setNick] = useState("");

    const handleClick = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Penguins')
          .insert({name: name, color: color, nickname: nickname})
          .select();
      
        alert("Your penguin has been created!");
        window.location("/gallery");

      }



  return (
    <div>
        <div className = "leftbar">
        <LeftBar/>
        </div>

        <div className = "main">
              <h1> Create Your Penguin</h1>
              <div className = "form">
              <p>Name</p>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p>Color</p>
                <select value={color} onChange={(e) => setColor(e.target.value)}>
                    <option value = "">Select A Color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </select>
      <p>Nickname</p>
                <input
                    type="text"
                    placeholder="Nickname"
                    value={nickname}
                    onChange={(e) => setNick(e.target.value)}
                />
              </div>
              <button onClick = {handleClick}>Submit</button>



              <div className = "compimage">
              <img src = {cpenguin} alt = "penguins" style = {{width: '300px', height: '150px'}}/>
              </div>
        </div>
      
    </div>
  )
}
