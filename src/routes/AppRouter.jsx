<<<<<<< HEAD
import React from 'react'
=======

>>>>>>> cdd26ec5f2419deb852cae7a5818640e94e52109
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '../layouts/layout/RootLayout'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Modal from '../components/modal/Modal'

const AppRouter = () => {
    const routes = createBrowserRouter([{
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/modal',
                element: <Modal/>
            }
        ]
    }])
  return (
    <div>
        <RouterProvider router={routes}/>
    </div>
  )
}

export default AppRouter