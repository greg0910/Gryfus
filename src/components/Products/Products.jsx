import React from 'react';
import productos from '../../json/productos.json';
import { ProductCard } from './ProductCard';
import './Products.css';

export const Products = ({ onProductSelect }) => {
    return (
        <section id="productos" className="products-section">
            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-title">PRODUCTOS</h2>
                    <p className="section-subtitle">Haz clic para ver información.</p>
                </div>
                
                <div className="products-grid">
                    {productos.map((producto, index) => {
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
            </div>
        </section>
    );
};
