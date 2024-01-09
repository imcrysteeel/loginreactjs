import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main className="w-full bg-[#F5F5F5] flex justify-center items-center min-h-[100dvh]">
        <Outlet />
    </main>
  )
}

export default AuthLayout