import React from 'react';
import './System.css';

export const System = () => {
    return (
        <main id="sistema" className="system-section">
            <div className="system-container">
                <h2 className="system-title">SISTEMA DE DISEÑO</h2>
                
                <div className="system-row">
                    <div className="system-item">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                            <polyline points="2 12 12 17 22 12"></polyline>
                            <polyline points="2 17 12 22 22 17"></polyline>
                        </svg>
                        <div className="system-text">
                            <h3>L → Layer</h3>
                            <p>Función principal<br/>de la prenda.</p>
                        </div>
                    </div>
                    <div className="system-divider"></div>
                    <div className="system-item">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9"></path>
                            <line x1="16" y1="14" x2="16" y2="22"></line>
                            <line x1="8" y1="14" x2="8" y2="22"></line>
                            <line x1="12" y1="16" x2="12" y2="24"></line>
                        </svg>
                        <div className="system-text">
                            <h3>C → Condition</h3>
                            <p>Condición climática<br/>dominante.</p>
                        </div>
                    </div>
                    <div className="system-divider"></div>
                    <div className="system-item">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <div className="system-text">
                            <h3>E → Exposure</h3>
                            <p>Duración e intensidad<br/>del esfuerzo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
