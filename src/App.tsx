// import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import CreateTask from './pages/CreateTask'
import EditTask from './pages/EditTask'
import { TaskProvider } from './context/TaskContext'
import './App.css'

function App() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading} = useAuth0();

  if (isLoading) return <div> Loading.... </div>;

  return (
    <TaskProvider>
      <div>
        <nav className='navbar navbar-expand navbar-dark bg-dark px-3'>
          <a className='navbar-brand' href='/'> Task Manager </a>
          <div className='ms-auto'>
            {isAuthenticated ? (
              <button className='btn btn-outline-light' onClick={() => logout({ logoutParams: {returnTo: window.location.origin} })}> Log Out </button>
            ) : (
              <button className='btn btn-outline-light' onClick={() => loginWithRedirect()}> Log In </button>
            )}
          </div>
        </nav>

        <Routes>
          <Route path="/" element={isAuthenticated ? <Dashboard/> : <Navigate to = "/login"/>}/>
          <Route path="/create" element={isAuthenticated ? <CreateTask/> : <Navigate to = "/login"/>}/>
          <Route path="/login" element={<div className='p-4'> <h2> Please Log In </h2> </div>}/>
          <Route path="/edit/:id" element={isAuthenticated ? <EditTask/> : <Navigate to = "/login"/>}/>
        </Routes>
      </div>
    </TaskProvider>
  )
}

export default App
