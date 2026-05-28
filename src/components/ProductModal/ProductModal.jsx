import React from 'react';
import { TbX, TbRun, TbTrekking, TbMountain, TbBackpack, TbShoppingCart, TbClock, TbCheck, TbFeather, TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import './ProductModal.css';

// Helper to resolve product image paths from the JSON
const getProductImage = (imagePath) => {
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

export const ProductModal = ({ selectedProduct, onClose }) => {
    const [isNotifyView, setIsNotifyView] = React.useState(false);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Reset image index when product changes
    React.useEffect(() => {
        setCurrentImageIndex(0);
    }, [selectedProduct]);

    if (!selectedProduct) return null;

    const images = Array.isArray(selectedProduct.imagen) ? selectedProduct.imagen : [selectedProduct.imagen];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNotifyClick = () => {
        setIsNotifyView(true);
    };

    const handleClose = () => {
        setIsNotifyView(false);
        onClose();
    };

    return (
        <div className="product-modal-overlay" onClick={handleClose}>
            <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="product-modal-close" onClick={handleClose}>
                    <TbX size={24} />
                </button>
                <div className="modal-scrollable">
                    <div className="product-img-wrapper modal-img-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
                        <span className="product-number" style={{ position: 'absolute', zIndex: 10 }}>0{selectedProduct.id}</span>
                        <img 
                            src={getProductImage(images[currentImageIndex])} 
                            alt={`${selectedProduct.nombre} ${currentImageIndex + 1}`} 
                            className="product-img"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        {images.length > 1 && (
                            <>
                                <button onClick={prevImage} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <TbChevronLeft size={20} color="#000" />
                                </button>
                                <button onClick={nextImage} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <TbChevronRight size={20} color="#000" />
                                </button>
                                <div style={{ position: 'absolute', bottom: 15, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, zIndex: 10 }}>
                                    {images.map((_, idx) => (
                                        <div key={idx} style={{ width: 8, height: 8, borderRadius: '50%', background: idx === currentImageIndex ? '#0f1110' : 'rgba(0,0,0,0.3)', transition: 'background 0.3s' }} />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    
                    <div className="product-details modal-details">
                        <div className="modal-header-text">
                            <h3 className="product-name">{selectedProduct.nombre}</h3>
                            <span className="product-category">Línea {selectedProduct.categoria}</span>
                        </div>

                        <div className="modal-info-card">
                            <div className="modal-icons-row">
                                {selectedProduct.usos.map((uso) => (
                                    <div className="modal-icon-item" key={uso}>
                                        {React.cloneElement(getUsoIcon(uso), { size: 24 })}
                                        <span>{uso}</span>
                                    </div>
                                ))}
                                <div className="modal-icon-item time-item">
                                    <TbClock size={24} strokeWidth={1.5} />
                                    <span className="time-text">{selectedProduct.hora}</span>
                                </div>
                            </div>

                            <hr className="modal-divider" />

                            <h4 className="modal-section-title">CARACTERÍSTICAS TÉCNICAS</h4>
                            <ul className="custom-check-list">
                                {selectedProduct.beneficios.map((beneficio) => (
                                    <li key={beneficio}>
                                        <TbCheck size={18} strokeWidth={2} />
                                        <span>{beneficio}</span>
                                    </li>
                                ))}
                            </ul>

                            <h4 className="modal-section-title">SENSACIÓN DE USO</h4>
                            <div className="sensacion-item">
                                <TbFeather size={18} strokeWidth={2} />
                                <span>{selectedProduct.Sensación.join(', ')}.</span>
                            </div>

                            <button className="btn-primary product-cta" onClick={handleNotifyClick} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', letterSpacing: '0.5px', textTransform: 'none', margin: '1.5rem auto 0 auto' }}>
                                <TbShoppingCart size={20} />
                                <span>{selectedProduct.cta || "Quiero esta solución"}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notify Modal Overlay */}
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
