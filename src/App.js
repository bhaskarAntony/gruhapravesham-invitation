import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import S from './components/S'
import Enquiry from './components/Enquiry'
import Main from './components/Main'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/succsess' element={<S/>}/>
        <Route path='/admission' element={<Enquiry/>}/>
        <Route path='/enquiry' element={<Enquiry/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
