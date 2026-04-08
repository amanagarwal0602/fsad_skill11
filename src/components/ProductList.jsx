import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Fetch products from Store API using axios
  const fetchProducts = () => {
    setLoading(true)
    setError(null)
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data)
        setFilteredProducts(response.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // Dropdown filter based on category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(
        products.filter((p) => p.category === selectedCategory)
      )
    }
  }, [selectedCategory, products])

  // Get unique categories
  const categories = [...new Set(products.map((p) => p.category))]

  // Refresh button handler
  const handleRefresh = () => {
    setSelectedCategory('all')
    fetchProducts()
  }

  if (loading) return <div className="loading">⏳ Loading products...</div>
  if (error) return <div className="error">❌ Error: {error}</div>

  return (
    <div className="page-container">
      <Link to="/" className="back-link">← Back to Dashboard</Link>
      <h1 className="page-title">🛒 Store Products</h1>
      <p className="page-subtitle">
        Data fetched from <code>https://fakestoreapi.com/products</code> using{' '}
        <code>axios</code>
      </p>

      {/* Filter & Refresh */}
      <div className="filter-bar">
        <div className="filter-group">
          <label htmlFor="category-filter">Filter by Category:</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button className="btn-refresh" onClick={handleRefresh}>
          🔄 Refresh
        </button>
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-img-wrap">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-cat">{product.category}</div>
            <div className="product-title">{product.title}</div>
            <div className="product-desc">{product.description}</div>
            <div className="product-bottom">
              <div className="product-price">${product.price.toFixed(2)}</div>
              <div className="product-rating">
                ⭐ {product.rating.rate} / 5
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
