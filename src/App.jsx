import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
 

  return (
    <>
        <Routes>

      
<Route path="/"  element={<Home />}>
   
    <Route index  element={<Dashboard/>} />
    
    
  </Route>
</Routes>
    </>
  )
}

export default App
