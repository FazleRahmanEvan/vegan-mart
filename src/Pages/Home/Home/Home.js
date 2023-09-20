import React from 'react';
import CategoryBanner from '../CategoryBanner/CategoryBanner';
import BrowseByCategory from '../BrowseByCategory/BrowseByCategory';
import BestSellingProduct from '../BestSellingProduct/BestSellingProduct';
import SubscribeNews from '../SubscribeNews/SubscribeNews';
import ComboPackage from '../ComboPackage/ComboPackage';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <CategoryBanner></CategoryBanner>
            <BrowseByCategory></BrowseByCategory>
            <BestSellingProduct></BestSellingProduct>
            <SubscribeNews></SubscribeNews>
            <ComboPackage></ComboPackage>
            <Service></Service>
        </div>
    );
};

export default Home;