import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import S from './components/S'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/succsess' element={<S/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
