import { useState } from 'react'
import './App.css'
import Page from './Page'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes> 
      {/* //check */}
      <Route path='/' element={<Page/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
