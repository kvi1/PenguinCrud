import React from 'react'
import LeftBar from './LeftBar'
import gpenguin from './Images/gpenguin.png'
import { useState, useEffect } from 'react'
import './components.css'
import {supabase} from '../client'
import { useParams } from 'react-router-dom';


export default function Create() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [nickname, setNick] = useState("");
    const [data, setData] = useState({});
    const {id} = useParams();

    const handleDelete = async (event) => {
        event.preventDefault();
        await supabase.from('Penguins').delete().eq('id', id);
        alert("Your penguin has been deleted!");
        window.location = "/gallery";
    }
    


    const handleClick = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Penguins')
          .update({name: name, color: color, nickname: nickname})
          .eq('id', id);
      
        alert("Your penguin has been updated!");
        window.location = "/gallery";

      }

    
        useEffect(() => {
            const fetchData = async () =>{
                const {data} = await supabase.from('Penguins').select('*').eq('id', id).single();
                setData(data);
                setName(data.name);
                setColor(data.color);
                setNick(data.nickname);   
        }
        fetchData();
    }, [id])

    



  return (
    <div>
        <div className = "leftbar">
        <LeftBar/>
        </div>
        <div className = "delete">
        <button onClick = {handleDelete}>Delete</button>
        </div>
        <div className = "main">
              <h1> Edit Your Penguin</h1>
              <div className = "stats">
              <p>Current Name: {data.name}</p>
              <p>Current Color: {data.color}</p>
              <p>Current Nickname: {data.nickname}</p>
              </div>
              <div className = "editimage">
              <img src = {gpenguin} alt = "penguins"/>
              </div>
              <div className = "formedit">
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
              <div className = "editbuttons">
              
              <button onClick = {handleClick}>Submit</button>
             
              </div>
           
        </div>
      
    </div>
  )
}
