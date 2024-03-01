import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/component'
function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
