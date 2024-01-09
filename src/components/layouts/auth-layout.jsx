import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main className="w-full bg-blue-400 flex justify-center items-center min-h-[100dvh]">
        <Outlet />
    </main>
  )
}

export default AuthLayout