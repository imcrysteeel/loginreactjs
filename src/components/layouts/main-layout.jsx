import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '@/components/navigation-bar'

const MainLayout = () => {
  return (
    <main className="App">
        <NavigationBar />
        <Outlet />
    </main>
  )
}

export default MainLayout