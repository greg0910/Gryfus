import React, { useState } from 'react';
import productos from '../../json/productos.json';
import { ProductCard } from './ProductCard';
import './Products.css';

export const Products = ({ onProductSelect, categoryFilter, setCategoryFilter }) => {
    const [genderFilter, setGenderFilter] = useState('All');

    const filteredProducts = productos.filter(p => {
        // Category filter
        const matchesCategory = categoryFilter === 'All' || (p.usos && p.usos.includes(categoryFilter));
        
        // Gender filter
        const matchesGender = genderFilter === 'All' || p.genero === genderFilter || p.genero === 'unisex';

        return matchesCategory && matchesGender;
    });

    return (
        <section id="productos" className="products-section">
            <div className="section-container">
                <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                    <div className="header-left">
                        <h2 className="section-title">PRODUCTOS</h2>
                        <p className="section-subtitle">Haz clic para ver información.</p>
                        <div className="header-line"></div>
                    </div>
                    {/* Filters */}
                    <div className="filters-container" style={{ margin: 0, width: '100%' }}>
                        <div className="gender-filters" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'nowrap', overflowX: 'auto', paddingBottom: '0.5rem', scrollbarWidth: 'none' }}>
                            <button 
                                className={`filter-btn ${genderFilter === 'All' ? 'active-all' : ''}`} 
                                onClick={() => setGenderFilter('All')}
                                style={{ flexShrink: 0 }}
                            >
                                All
                            </button>
                            <button 
                                className={`filter-btn ${genderFilter === 'hombre' ? 'active-hombre' : ''}`} 
                                onClick={() => setGenderFilter('hombre')}
                                style={{ flexShrink: 0 }}
                            >
                                Hombre
                            </button>
                            <button 
                                className={`filter-btn ${genderFilter === 'mujer' ? 'active-mujer' : ''}`} 
                                onClick={() => setGenderFilter('mujer')}
                                style={{ flexShrink: 0 }}
                            >
                                Mujer
                            </button>
                            
                            {categoryFilter !== 'All' && (
                                <div className="category-filter-badge" style={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
                                    {categoryFilter}
                                    <button className="clear-filter-btn" onClick={() => setCategoryFilter('All')}>&times;</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                


                <div className="products-grid">
                    {filteredProducts.map((producto, index) => {
                        return (
                            <ProductCard 
                                key={producto.id} 
                                producto={producto} 
                                index={index} 
                                onClick={() => onProductSelect(producto)} 
                            />
                        );
                    })}
                </div>
                
                {filteredProducts.length === 0 && (
                    <p className="no-products-msg">No se encontraron productos con estos filtros.</p>
                )}
            </div>
        </section>
    );
};
