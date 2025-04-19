import React from 'react'
import penguin from './Images/penguin.gif'
import './components.css'
import {Link} from 'react-router-dom'

export default function LeftBar() {
  return (
    <div>
      <h1>Club Penguin🐧</h1>
      <Link to = {'/'}>
      <h2>Home</h2>
      </Link>
      <Link to = {'/create'}>
      <h2>Create</h2>
      </Link>
      <Link to = {'/gallery'}>
      <h2>Penguin Gallery</h2>
      </Link>
      <img src= {penguin} alt="Penguin GIF"/>

    </div>
  )
}
