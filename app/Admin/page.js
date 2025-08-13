"use client";

import React, { useState } from 'react';
import { FiPackage, FiMail, FiUsers, FiPlus, FiEdit2, FiTrash2, FiArrowLeft  } from 'react-icons/fi';
import { useRouter } from 'next/navigation'
export default function Admin() {
  // State management
  const [activeTab, setActiveTab] = useState('overview');
   const router = useRouter();
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 299.99, category: 'Electronics' },
    { id: 2, name: 'Product 2', price: 199.99, category: 'Accessories' },
    { id: 3, name: 'Product 3', price: 399.99, category: 'Electronics' },
  ]);
  const [inquiries, setInquiries] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Inquiry about Product 1' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: 'Question about shipping' },
  ]);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: ''
  });

  // Mock statistics
  const stats = {
   totalProducts: products.length,
   totalInquiries: inquiries.length,
   
  };

  // Product management functions
  const handleAddProduct = () => {
    setIsAddingProduct(true);
    setEditingProduct(null);
    setNewProduct({ name: '', price: '', category: '' });
  };

  const handleEditProduct = (id) => {
    const product = products.find(p => p.id === id);
    setEditingProduct(id);
    setNewProduct({ ...product });
    setIsAddingProduct(false);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts(products.map(product => 
        product.id === editingProduct ? 
        { ...newProduct, id: editingProduct } : 
        product
      ));
    } else {
      setProducts([
        ...products,
        { ...newProduct, id: products.length + 1 }
      ]);
    }
    setIsAddingProduct(false);
    setEditingProduct(null);
    setNewProduct({ name: '', price: '', category: '' });
  };

  const handleCancelEdit = () => {
    setIsAddingProduct(false);
    setEditingProduct(null);
    setNewProduct({ name: '', price: '', category: '' });
  };

  const ProductForm = () => (
    <form onSubmit={handleSaveProduct} className="space-y-4 mb-6 bg-gray-50 p-4 rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
        <input
          type="text"
           name="name"
          required
           minLength={3}
        maxLength={50}
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="w-full p-2 border rounded focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
        <input
          type="number"
          required
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
          className="w-full p-2 border rounded focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <input
          type="text"
          required
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          className="w-full p-2 border rounded focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          {editingProduct ? 'Update' : 'Save'}
        </button>
        <button
          type="button"
          onClick={handleCancelEdit}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>
  );

  return (
    <div className="min-h-screen bg-gray-100">
        <button
        onClick={() => router.push('/Homepage')}
        className="fixed top-6 left-6 z-10 p-3 bg-white rounded-full shadow-lg 
                 hover:shadow-xl transition-all duration-300 group mt-5 "
        aria-label="Back to Homepage"
      >
        <FiArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 
                     transition-colors duration-300" />
      </button>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900 mt-9 ml-5">Admin Dashboard</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === 'overview'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === 'products'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === 'inquiries'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Inquiries
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center">
                <FiPackage className="w-8 h-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Products</p>
                  <p className="text-2xl font-semibold text-gray-900">{stats.totalProducts}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center">
                <FiMail className="w-8 h-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Inquiries</p>
                  <p className="text-2xl font-semibold text-gray-900">{stats.totalInquiries}</p>
                </div>
              </div>
            </div>
           
          </div>
        )}

        {activeTab === 'products' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Manage Products</h2>
              {!isAddingProduct && !editingProduct && (
                <button
                  onClick={handleAddProduct}
                  className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  <FiPlus className="w-5 h-5 mr-2" />
                  Add Product
                </button>
              )}
            </div>

            {(isAddingProduct || editingProduct) && <ProductForm />}

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-purple-500">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap ">{product.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">${product.price.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditProduct(product.id)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <FiEdit2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FiTrash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'inquiries' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Inquiries</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-purple-500 font-serif">
                  {inquiries.map((inquiry) => (
                    <tr key={inquiry.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{inquiry.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{inquiry.email}</td>
                      <td className="px-6 py-4">{inquiry.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}