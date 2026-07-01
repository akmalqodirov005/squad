<<<<<<< HEAD
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './RootLayout.css'
=======
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'
>>>>>>> cdd26ec5f2419deb852cae7a5818640e94e52109

const RootLayout = () => {
  return (
    <div>
        <header>
            <Header/>
        </header>

<<<<<<< HEAD
        <main className='main'>
=======
        <main>
>>>>>>> cdd26ec5f2419deb852cae7a5818640e94e52109
            <Outlet/>
        </main>

        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default RootLayout