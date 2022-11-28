import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import HomeBanner from '../HomeBanner/HomeBanner';
import ProductCategory from '../ProductCategory/ProductCategory';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <ProductCategory />
            <Review />
            <AdvertisedItems />
        </div>
    );
};

export default Home;