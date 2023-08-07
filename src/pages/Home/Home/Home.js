import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import ProductCategory from '../ProductCategory/ProductCategory';
import FreeShipping from '../../../components/Home/FreeShipping';
import OurStore from '../../../components/Home/OurStore';
import ContactUs from '../../../components/Home/ContactUs';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <FreeShipping />
            <OurStore />
            <ProductCategory />
            <ContactUs />
        </div>
    );
};

export default Home;