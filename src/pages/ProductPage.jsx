import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TbX, TbRun, TbTrekking, TbMountain, TbBackpack, TbShoppingCart, TbClock, TbCheck, TbFeather, TbArrowLeft } from 'react-icons/tb';
import productosData from '../json/productos.json';
import './ProductPage.css';

// Helper to resolve product image paths from the JSON
const getProductImage = (imagePath) => {
    const filename = imagePath.split('/').pop();
    return new URL(`../assets/images/productos/${filename}`, import.meta.url).href;
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

export const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isNotifyView, setIsNotifyView] = useState(false);

    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);
        
        // Find product by id
        const product = productosData.find(p => p.id.toString() === id);
        if (product) {
            setSelectedProduct(product);
        } else {
            // Redirect to home if product not found
            navigate('/');
        }
    }, [id, navigate]);

    if (!selectedProduct) return null;

    return (
        <div className="product-page-container">
            {/* Floating Back Button */}
            <button className="floating-back-btn" onClick={() => navigate(-1)}>
                <TbArrowLeft size={24} />
            </button>

            <div className="product-page-content">
                <div className="product-img-wrapper page-img-wrapper">
                    <span className="product-number">0{selectedProduct.id}</span>
                    <img 
                        src={getProductImage(selectedProduct.imagen)} 
                        alt={selectedProduct.nombre} 
                        className="product-img"
                    />
                </div>
                
                <div className="product-details page-details">
                    <div className="page-header-text">
                        <h3 className="product-name">{selectedProduct.nombre}</h3>
                        <span className="product-category">Línea {selectedProduct.categoria}</span>
                    </div>

                    <div className="page-info-card">
                        <div className="page-icons-row">
                            {selectedProduct.usos.map((uso) => (
                                <div className="page-icon-item" key={uso}>
                                    {React.cloneElement(getUsoIcon(uso), { size: 24 })}
                                    <span>{uso}</span>
                                </div>
                            ))}
                            <div className="page-icon-item time-item">
                                <TbClock size={24} strokeWidth={1.5} />
                                <span className="time-text">{selectedProduct.hora}</span>
                            </div>
                        </div>

                        <hr className="page-divider" />

                        <h4 className="page-section-title">CARACTERÍSTICAS TÉCNICAS</h4>
                        <ul className="custom-check-list page-check-list">
                            {selectedProduct.beneficios.map((beneficio) => (
                                <li key={beneficio}>
                                    <TbCheck size={18} strokeWidth={2} />
                                    <span>{beneficio}</span>
                                </li>
                            ))}
                        </ul>

                        <h4 className="page-section-title">SENSACIÓN DE USO</h4>
                        <div className="sensacion-item page-sensacion-item">
                            <TbFeather size={18} strokeWidth={2} />
                            <span>{selectedProduct.Sensación.join(', ')}.</span>
                        </div>

                        <button className="btn-primary product-cta page-cta" onClick={() => setIsNotifyView(true)} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', letterSpacing: '0.5px', textTransform: 'none', margin: '1.5rem auto 0 auto' }}>
                            <TbShoppingCart size={20} />
                            <span>{selectedProduct.cta || "Quiero esta solución"}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Notify Modal Overlay (Keep this as an overlay on top of the page) */}
            {isNotifyView && (
                <div className="notify-modal-overlay" onClick={() => setIsNotifyView(false)}>
                    <div className="notify-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="notify-modal-close" onClick={() => setIsNotifyView(false)}>
                            <TbX size={24} />
                        </button>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-dark)', fontSize: '0.95rem' }}>Déjanos tu correo para notificarte cuando este producto esté disponible.</p>
                        <input 
                            type="email" 
                            placeholder="Tu correo electrónico" 
                            className="notify-input"
                            style={{ width: '100%', padding: '1rem', marginBottom: '1.5rem', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'var(--font-body)', fontSize: '1rem' }}
                        />
                        <button className="btn-primary notify-btn" style={{ display: 'inline-block', margin: '0 auto', textTransform: 'uppercase', letterSpacing: '1px', borderRadius: '50px', padding: '0.8rem 2rem' }} onClick={() => setIsNotifyView(false)}>
                            Notifícame
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
