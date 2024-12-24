import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Header from './components/Header'

const Routers = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/acc' element={<App />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers