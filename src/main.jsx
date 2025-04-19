import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Create from './Components/Create.jsx'
import Gallery from './Components/Gallery.jsx'
import Edit from './Components/Edit.jsx'
import Info from './Components/Info.jsx'
import {BrowserRouter, Route, Routes} from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
    <Route path = '/' element = {<App/>}/>
    <Route path = '/create' element = {<Create/>}/>
    <Route path = '/gallery' element = {<Gallery/>}/>
    <Route path = '/:id' element = {<Info/>}/>
    <Route path = '/:id/edit' element = {<Edit/>}/>
   </Routes>
    </BrowserRouter>
)
