import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import BalaifinderLogo from "@/assets/Logo.svg"
import useModalStore from '@/store/useModalStore';
import MatchUpModal from '../modals/match-up-modal';
import MatchUpModalAdvance from '../modals/match-up-modal-advance';

const NavigationBar = () => {
    const [matchUp, setMatchUp] = useState(false);
    const [matchUpAdvance, setMatchUpAdvance] = useState(false);
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
            <p onClick={()=> setMatchUp(true)} className="cursor-pointer">Match Up</p>
            <p onClick={()=> onOpen("login-modal")} className="cursor-pointer">Login</p>
        </div>

        <MatchUpModal isOpen={matchUp} onClose={(state) => setMatchUp(state)} onOpenAdvancePref={setMatchUpAdvance} />
        <MatchUpModalAdvance isOpen={matchUpAdvance} onClose={(state)=>setMatchUpAdvance(state)}/>
    </nav>
  )
}

export default NavigationBar