import React from 'react'
import LeftBar from './LeftBar'
import gpenguin from './Images/gpenguin.png'
import { useState, useEffect } from 'react'
import './components.css'
import {supabase} from '../client'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';


export default function Info() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [nickname, setNick] = useState("");
    const [data, setData] = useState({});
    const {id} = useParams();


    
        useEffect(() => {
            const fetchData = async () =>{
                const {data} = await supabase.from('Penguins').select('*').eq('id', parseInt(id)).single();
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
        <div className = "main">
              <h1> This Penguin's Stats</h1>
              <div className = "statsMain">
              <p>Current Name: {data.name}</p>
              <p>Current Color: {data.color}</p>
              <p>Current Nickname: {data.nickname}</p>
              <p>Order In Line: {data.id}</p>
              <Link to = {`/${id}/edit`}> <button>Edit</button></Link>
              </div>
              <div className = "editimage">
              <img src = {gpenguin} alt = "penguins"/>
              </div>
           
        </div>
      
    </div>
  )
}
