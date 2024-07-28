import React from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

const Page = () => {
  return (
    <main className=' bg-gradient-to-b from-gray-950 from-80% to-gray-800 selection:text-orange-600 overflow-x-hidden'>
        <NavBar></NavBar>
        <Footer></Footer>
    </main>
  )
}

export default Page