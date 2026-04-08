import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dash-header">
        <h1>📡 API Integration Dashboard</h1>
        <span className="dash-badge">⚛ React + fetch + Axios</span>
        <p>Fetching data using Fetch API, Axios & Local JSON — FSAD Skill 11</p>
      </div>

      {/* Navigation Cards */}
      <div className="dash-cards">
        {/* Part A - Local JSON */}
        <Link to="/local-users" className="dash-card card-blue">
          <div className="card-accent"></div>
          <div className="card-icon">📁</div>
          <h3>Part A — Local JSON</h3>
          <p className="card-desc">
            LocalUserList component using <code>fetch()</code> to load data from
            <code>public/users.json</code>
          </p>
          <div className="card-source">fetch('/users.json')</div>
          <div className="card-stat">
            <span className="stat-val">6</span>
            <span className="stat-label">users</span>
          </div>
          <span className="card-link">→ View Local Users</span>
        </Link>

        {/* Part B - JSONPlaceholder */}
        <Link to="/users-api" className="dash-card card-green">
          <div className="card-accent"></div>
          <div className="card-icon">🌐</div>
          <h3>Part B — JSONPlaceholder</h3>
          <p className="card-desc">
            UserList component using <code>fetch()</code> to call
            <code>jsonplaceholder.typicode.com/users</code>
          </p>
          <div className="card-source">jsonplaceholder.typicode.com/users</div>
          <div className="card-stat">
            <span className="stat-val">10</span>
            <span className="stat-label">users</span>
          </div>
          <span className="card-link">→ View Users API</span>
        </Link>

        {/* Part C - Store API */}
        <Link to="/products" className="dash-card card-amber">
          <div className="card-accent"></div>
          <div className="card-icon">🛒</div>
          <h3>Part C — Store API (Axios)</h3>
          <p className="card-desc">
            ProductList component using <code>axios</code> with dropdown filter
            & refresh button
          </p>
          <div className="card-source">fakestoreapi.com/products</div>
          <div className="card-stat">
            <span className="stat-val">20</span>
            <span className="stat-label">products</span>
          </div>
          <span className="card-link">→ View Products</span>
        </Link>
      </div>

      {/* Hooks Info */}
      <div className="hooks-section">
        <h2>⚡ React Hooks Used</h2>
        <div className="hooks-grid">
          <div className="hook-card">
            <div className="hook-name">useState</div>
            <div className="hook-desc">
              Manages component-level state for storing fetched data, loading
              flags, and error messages
            </div>
          </div>
          <div className="hook-card">
            <div className="hook-name">useEffect</div>
            <div className="hook-desc">
              Triggers API calls on component mount and handles side effects for
              data fetching
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="dash-footer">
        Built with ⚛ React 18 &nbsp;|&nbsp; useState + useEffect &nbsp;|&nbsp;
        fetch() + Axios &nbsp;|&nbsp; FSAD Skill 11
      </div>
    </div>
  )
}

export default Dashboard
