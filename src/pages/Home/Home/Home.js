import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import HomeBanner from '../HomeBanner/HomeBanner';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <ProductCategory />
            <AdvertisedItems />
        </div>
    );
};

export default Home;