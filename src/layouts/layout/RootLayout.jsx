import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './RootLayout.css'

const RootLayout = () => {
  return (
    <div>
        <header>
            <Header/>
        </header>

        <main className='main'>
            <Outlet/>
        </main>

        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default RootLayout