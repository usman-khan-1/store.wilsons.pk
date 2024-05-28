import React from 'react'
import Navbar from '../Components/Home/Navbar.jsx'
import Footer from './Footer.jsx'

function Layout({children}) {
  return (
    <div>
        <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
