import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero/Hero';
import { Products } from '../components/Products/Products';
import { System } from '../components/System/System';
import { Footer } from '../components/Footer/Footer';
import { ProductModal } from '../components/ProductModal/ProductModal';
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop';

export const Home = () => {
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [categoryFilter, setCategoryFilter] = useState('All');

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedProduct]);

    const handleProductSelect = (producto) => {
        if (isMobile) {
            navigate(`/producto/${producto.id}`);
        } else {
            setSelectedProduct(producto);
        }
    };

    return (
        <div className="home-page">
            <Hero onCategorySelect={setCategoryFilter} categoryFilter={categoryFilter} />
            <Products onProductSelect={handleProductSelect} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
            <System />
            <Footer />
            <ScrollToTop />

            <ProductModal 
                selectedProduct={selectedProduct} 
                onClose={() => setSelectedProduct(null)} 
            />
        </div>
    );
};
