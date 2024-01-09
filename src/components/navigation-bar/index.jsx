import React from 'react'

import BalaifinderLogo from "@/assets/Logo.svg"
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav className="sticky bg-white top-0 w-full flex items-center shadow-lg px-2 md:px-24  py-4 justify-between">
        <div className="flex items-center gap-x-2">
            <img src={BalaifinderLogo} className="h-12" />
            <Link to={"/"}>BALAIFINDER</Link>
        </div>
        <div className="flex items-center gap-x-8">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contacts"}>Contacts</Link>
            <Link to={"/match-up"}>Match Up</Link>
            <Link to={"/auth"}>Login</Link>
        </div>
    </nav>
  )
}

export default NavigationBar