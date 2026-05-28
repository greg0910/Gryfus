import React from 'react';
import './Hero.css';
import { TbRun, TbTrekking, TbMountain, TbBackpack } from 'react-icons/tb';
import bannerImg from '../../assets/images/Banner.png';
import logoImg from '../../assets/images/LogoG.png';

export const Hero = ({ onCategorySelect, categoryFilter }) => {
    const handleCategoryClick = (category) => {
        // Toggle off if clicking the already selected category
        const newCategory = categoryFilter === category ? 'All' : category;
        if (onCategorySelect) {
            onCategorySelect(newCategory);
        }
        document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="hero-header">
            {/* Background image & mask */}
            <div className="hero-bg-container">
                <img src={bannerImg} alt="Gryfus Banner Páramo" className="hero-bg-img" />
                <div className="hero-overlay"></div>
            </div>

            {/* Top Navigation Bar */}
            <nav className="nav-bar">
                <img src={logoImg} alt="Gryfus Logo" className="nav-logo" />
            </nav>

            {/* Hero Main Content */}
            <div className="hero-content">
                <span className="hero-tagline">Indumentaria Técnica</span>
                <h1 className="hero-title">Indumentaria outdoor diseñada desde el territorio.</h1>
                <p className="hero-description">
                    Funcionalidad, identidad y diseño integrados para acompañar experiencias reales dentro y fuera de la montaña.
                </p>

                <div className="hero-designed-for">
                    <span className="designed-for-title">Diseñado para:</span>
                    <ul className="designed-for-list">
                        <li 
                            className={`designed-for-item ${categoryFilter === 'Trail running' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('Trail running')}
                            style={{ cursor: 'pointer' }}
                        >
                            <span className="designed-for-icon">
                                <TbRun size={48} strokeWidth={1} />
                            </span>
                            <span className="designed-for-text">Trail running</span>
                        </li>
                        <li 
                            className={`designed-for-item ${categoryFilter === 'Power hiking' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('Power hiking')}
                            style={{ cursor: 'pointer' }}
                        >
                            <span className="designed-for-icon">
                                <TbTrekking size={48} strokeWidth={1} />
                            </span>
                            <span className="designed-for-text">Power hiking</span>
                        </li>
                        <li 
                            className={`designed-for-item ${categoryFilter === 'Trekking' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('Trekking')}
                            style={{ cursor: 'pointer' }}
                        >
                            <span className="designed-for-icon">
                                <TbMountain size={48} strokeWidth={1} />
                            </span>
                            <span className="designed-for-text">Trekking</span>
                        </li>
                        <li 
                            className={`designed-for-item ${categoryFilter === 'Outdoor diario' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('Outdoor diario')}
                            style={{ cursor: 'pointer' }}
                        >
                            <span className="designed-for-icon">
                                <TbBackpack size={48} strokeWidth={1} />
                            </span>
                            <span className="designed-for-text">Outdoor diario</span>
                        </li>
                    </ul>
                </div>

                <button className="btn-primary" onClick={() => {
                    if (onCategorySelect) onCategorySelect('All');
                    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
                }}>
                    Ver Productos
                </button>
            </div>
        </header>
    );
};
