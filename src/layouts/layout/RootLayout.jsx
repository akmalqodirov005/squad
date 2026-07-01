import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const RootLayout = () => {
  return (
    <div>
        <header>
            <Header/>
        </header>

        <main>
            <Outlet/>
        </main>

        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default RootLayout