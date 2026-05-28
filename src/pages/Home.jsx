import { useState, useEffect } from 'react';
import { Hero } from '../components/Hero/Hero';
import { Products } from '../components/Products/Products';
import { System } from '../components/System/System';
import { Footer } from '../components/Footer/Footer';
import { ProductModal } from '../components/ProductModal/ProductModal';
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop';

export const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedProduct]);

    return (
        <div className="home-page">
            <Hero />
            <Products onProductSelect={setSelectedProduct} />
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
