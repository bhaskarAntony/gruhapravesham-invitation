import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import S from './components/S'
import Enquiry from './components/Enquiry'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Enquiry/>}/>
        <Route path='/succsess' element={<S/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
