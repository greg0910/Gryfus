import React from 'react';
import { TbRun, TbTrekking, TbMountain, TbBackpack } from 'react-icons/tb';
import './Products.css';

// Helper to resolve product image paths from the JSON
const getProductImage = (imagePath) => {
    if (Array.isArray(imagePath)) {
        imagePath = imagePath[0];
    }
    const filename = imagePath.split('/').pop();
    return new URL(`../../assets/images/productos/${filename}`, import.meta.url).href;
};

// Helper to map 'usos' strings to React Icons
const getUsoIcon = (uso) => {
    switch (uso.toLowerCase()) {
        case 'trail running':
            return <TbRun size={16} strokeWidth={1.5} />;
        case 'hiking rápido':
        case 'hiking técnico':
        case 'power hiking':
            return <TbTrekking size={16} strokeWidth={1.5} />;
        case 'trekking':
        case 'ascensos largos':
            return <TbMountain size={16} strokeWidth={1.5} />;
        case 'outdoor diario':
            return <TbBackpack size={16} strokeWidth={1.5} />;
        default:
            return <TbRun size={16} strokeWidth={1.5} />;
    }
};

export const ProductCard = ({ producto, index, onClick }) => {
    return (
        <article className="product-card" onClick={onClick} style={{ cursor: 'pointer' }}>
            <span className="product-number">0{index + 1}</span>
            <div className="product-img-wrapper">
                <img src={getProductImage(producto.imagen)} alt={producto.nombre} className="product-img" />
            </div>
            <div className="product-details">
                <h3 className="product-name">{producto.nombre}</h3>
                <span className={`gender-tag tag-${producto.genero.toLowerCase()}`}>{producto.genero.toUpperCase()}</span>
            </div>
        </article>
    );
};
