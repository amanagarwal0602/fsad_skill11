import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LocalUserList.css'

const LocalUserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch data from public/users.json using fetch()
  useEffect(() => {
    setLoading(true)
    fetch('/users.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch local users')
        }
        return response.json()
      })
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="loading">⏳ Loading local users...</div>
  if (error) return <div className="error">❌ Error: {error}</div>

  return (
    <div className="page-container">
      <Link to="/" className="back-link">← Back to Dashboard</Link>
      <h1 className="page-title">📁 Local User List</h1>
      <p className="page-subtitle">
        Data fetched from <code>public/users.json</code> using <code>fetch()</code>
      </p>

      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-avatar">
              {user.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-email">✉ {user.email}</div>
              <div className="user-phone">📞 {user.phone}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LocalUserList
