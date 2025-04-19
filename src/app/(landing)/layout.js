import React from 'react';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

const LandingLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default LandingLayout;