import React from 'react';
import footerImg from '../../assets/images/Footer.png';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer-banner">
            <div className="footer-bg-container">
                <img src={footerImg} alt="Gryfus Territorio" className="footer-bg-img" />
                <div className="footer-overlay"></div>
            </div>
            
            <div className="footer-content">
                <h1 className="footer-title">El territorio no es solo inspiración.</h1>
                <h2 className="footer-subtitle">Es información para diseñar.</h2>
                <p className="footer-desc">
                    GRYFUS diseña productos pensados para responder a condiciones reales de movimiento, humedad, temperatura y variabilidad climática desde la experiencia de habitar la montaña colombiana.
                </p>
                
                <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="email" 
                        placeholder="Tu correo electrónico" 
                        className="footer-input"
                        required
                    />
                    <button type="submit" className="btn-primary">Acceso anticipado</button>
                </form>
                
                <div className="footer-bottom">
                    <p>GRYFUS © 2026 — Bogotá, Colombia</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/gryfus.co/" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
