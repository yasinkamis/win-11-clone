import React from 'react'
import Desktop from './components/Desktop'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Login from './components/Login'

const App = () => {
    return (
        <div>
            <Loader/>
            <Login/>
            <Desktop/>
            <Navbar/>
        </div>
    )
}

export default App
