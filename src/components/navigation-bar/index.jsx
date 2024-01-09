import React from 'react'

import { Link } from 'react-router-dom'
import BalaifinderLogo from "@/assets/Logo.svg"
import useModalStore from '@/store/useModalStore';

const NavigationBar = () => {
    const { modalKey, onOpen } = useModalStore();

  return (
    <nav className="sticky top-0 flex items-center justify-between w-full px-2 py-4 bg-white shadow-lg md:px-24">
        <div className="flex items-center gap-x-2">
            <img src={BalaifinderLogo} className="h-12" />
            <Link to={"/"}>BALAIFINDER</Link>
        </div>
        <div className="flex items-center gap-x-8">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contacts"}>Contacts</Link>
            <Link to={"/match-up"}>Match Up</Link>
            <p onClick={()=> onOpen("login-modal")} className="cursor-pointer">Login</p>
        </div>
    </nav>
  )
}

export default NavigationBar