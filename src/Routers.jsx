import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginReg from './pages/LoginReg'
import Home from './pages/Home'
import Header from './components/Header'
import Account from './pages/auth/Account'

const Routers = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/acc' element={<LoginReg />}></Route>
                <Route path='/dash' element={<Account />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers