import React from 'react'
import Benefits from './components/Benefits/Benefits'
import Heading from './components/Heading/Heading'
import Navbar from './components/Navbar/Navbar'
import Remote from './components/Remote/Remote'
import RemoteDevelopers from './components/RemoteDevelopers/RemoteDevelopers'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Heading/>
        <Benefits/>
        <Remote/>
        <RemoteDevelopers/>
    </div>
  )
}

export default Homepage