import React from 'react';
import blue from './Images/blue.png';
import red from './Images/red.png';
import green from './Images/green.png';
import yellow from './Images/yellow.png';
import './components.css';
import {Link} from 'react-router-dom';
export default function Card({ name, nickname, color, id }) {
  const colorMap = {
    blue: blue,
    red: red,
    green: green,
    yellow: yellow
  };
  console.log(id);

  const imgSrc = colorMap[color]; 

  return (
    <div className="card">
     <Link to = {`/${id}/edit`}> <button className = "cardbutton">Edit</button></Link>
      <img src={imgSrc} alt="penguin"/>
      <h1>Name: {name}</h1>
      <h2>Nickname: {nickname}</h2>
      <h2>Color: {color}</h2>
    </div>
  );
}
