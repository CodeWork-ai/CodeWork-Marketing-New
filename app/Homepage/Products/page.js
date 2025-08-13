'use client'

import { useState, useEffect } from 'react'
import { FiShoppingCart, FiHeart, FiInfo } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export default function Products() {
  const router = useRouter();
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  // Get unique categories dynamically
  const categories = ['all', ...new Set(products.map(product => product.category))]

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products') // Example API
        const data = await res.json()

        // Map API data to match our card fields
        const mappedProducts = data.map(item => ({
          id: item.id,
          name: item.title,
          price: item.price,
          description: item.description,
          image: item.image,
          affiliateLink: `https://example.com/product/${item.id}`, // Replace with your real link
          category: item.category
        }))

        setProducts(mappedProducts)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleInquiry = (productId) => {
    console.log('Inquiry for product:', productId)
    // You can open a modal, redirect to contact form, etc.
  }

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(product => product.category === filter)

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-pink-300 to-blue-300 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Back & Logo */}
      <div className="absolute top-6 left-6 z-10 flex items-center space-x-2">
        <img
          src="/viewlogo.png.png"
          alt="Logo"
          className="h-20 w-40"
        />
        <button
          onClick={() => router.push('/Homepage')}
          aria-label="Back to Homepage"
          className="ml-210 bg-blue-600 p-3 hover:p-4 hover:bg-blue-800 hover:scale-105 rounded text-white font-serif"
        >
          Home
        </button>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Our Products</h1>
        <p className="text-lg text-gray-600 font-serif">
          Discover our curated selection of premium products
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-wrap gap-4 justify-center font-serif">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full capitalize ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-pink-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
                  aria-label="Add to favorites"
                >
                  <FiHeart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 font-serif line-clamp-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600 font-serif">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 font-serif capitalize">
                    {product.category}
                  </span>
                </div>

                <div className="flex gap-4">
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg 
                               flex items-center justify-center gap-2 hover:bg-blue-700 
                               transition-colors duration-200"
                  >
                    <FiShoppingCart className="w-5 h-5" />
                    <span className="font-serif">Buy Now</span>
                  </a>
                  <button
                    onClick={() => handleInquiry(product.id)}
                    className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 
                               rounded-lg flex items-center justify-center gap-2 
                               hover:bg-blue-50 transition-colors duration-200"
                  >
                    <FiInfo className="w-5 h-5" />
                    <span className="font-serif">Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
