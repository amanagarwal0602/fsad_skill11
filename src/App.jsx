import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import LocalUserList from './components/LocalUserList'
import UserList from './components/UserList'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/local-users" element={<LocalUserList />} />
        <Route path="/users-api" element={<UserList />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </div>
  )
}

export default App
