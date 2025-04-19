import React from 'react'
import LeftBar from './LeftBar'
import {useState, useEffect} from 'react'
import {supabase} from '../client'
import Card from './Card.jsx'
import {Link} from 'react-router-dom'

export default function Gallery() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const {data} = await supabase.from('Penguins').select('*')
            setData(data);    
    }
    fetchData();
}, [])


  return (
    <div>
        <div className = "leftbar">
        <LeftBar/>
        </div>
        <div className = "main">
        <h1> Penguin Gallery</h1>
        <p>Here you can see all the penguins that have been created!</p>
        </div>
        <div className = "gallery">
        {data && data.slice().reverse().map((penguin) => (
            <Link to = {`/${penguin.id}`}><Card name = {penguin.name} nickname = {penguin.nickname} color = {penguin.color} key = {penguin.id} id= {penguin.id}/>
            </Link>
        ))}

        </div>
      
    </div>
  )
}
