import React, { useState, useEffect } from 'react';
import { useCart } from '../../../../contexts/CartContext';
import { useGetProductsQuery, useGetCategoriesQuery } from '../../../../services/queries';
import './MenuSection.css';

const MenuSection = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState(null);
  const [viewMode, setViewMode] = useState('cards');
  const [sort, setSort] = useState('name');
  
  const { 
    isLoading: isLoadingProducts, 
    data: products = [], 
    error: productsError 
  } = useGetProductsQuery({ sort, category_id: activeCategory || 1 });
  
  const { 
    isLoading: isLoadingCategories, 
    data: categories = [], 
    error: categoriesError 
  } = useGetCategoriesQuery();

  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0].id);
    }
  }, [categories, activeCategory]);

  return (
    <section className="menu-section">
      <div className="container">
        {/* Header */}
        <div className="menu-header">
          <h2 className="menu-title">
            Our <span className="highlight">Menu</span>
          </h2>
          <p className="menu-subtitle">
            Explore our special, tasteful dishes on the Restaurant Menu!
          </p>
        </div>

        {/* Categories Navigation */}
        <nav className="menu-categories">
          <button
            className={`category-btn ${activeCategory === 'popular' ? 'active' : ''}`}
            onClick={() => setActiveCategory('popular')}
          >
            Popular
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </nav>

        {/* Control Panel */}
        <div className="menu-controls">
          <button 
            className={`control-btn ${viewMode === 'cards' ? 'active' : ''}`}
            onClick={() => setViewMode('cards')}
          >
            View as Cards
          </button>
          <button 
            className={`control-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            View as List
          </button>
          <span className="control-divider">|</span>
          <button 
            className={`control-btn ${sort === 'name' ? 'active' : ''}`}
            onClick={() => setSort('name')}
          >
            Sort by Name
          </button>
          <button 
            className={`control-btn ${sort === 'price' ? 'active' : ''}`}
            onClick={() => setSort('price')}
          >
            Sort by Price
          </button>
          <span className="control-divider">|</span>
          <button className="control-btn">Download Menu</button>
        </div>

        {/* Products Display */}
        <div className="menu-content">
          {isLoadingProducts ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading delicious dishes...</p>
            </div>
          ) : products && products.length > 0 ? (
            <div className="products-showcase">
              {products.slice(0, 8).map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No dishes available in this category</p>
              <span>Try selecting a different category</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <article className="product-card">
      <div className="product-details">
        <header className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
        </header>
        
        <footer className="product-actions">
          <span className="product-price">{product.price}$</span>
          <button 
            className="add-to-cart-btn" 
            onClick={handleAddToCart}
            title={`Add ${product.name} to cart`}
          >
            🛒
          </button>
        </footer>
      </div>
      
      <div className="product-visual">
        <img 
          src={product.image || 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400'} 
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400';
          }}
        />
      </div>
    </article>
  );
};

export default MenuSection;
