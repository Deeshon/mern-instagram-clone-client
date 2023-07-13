import React from 'react'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import Signup from './components/Signup'
import {BrowserRouter, Routes, Route} from "react-router"
import { Layout } from './Layout'
import Home from './components/Home'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Layout />}>
          <Route path="/auth/login" element={<Signin />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>
        <Route path='/' element={<Header />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App