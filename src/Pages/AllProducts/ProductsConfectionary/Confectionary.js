import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import ConfectionaryCard from './ConfectionaryCard';
import Service from '../../Home/Service/Service';

const Confectionary = () => {
    return (
        <div>
            <Breadcrumbs></Breadcrumbs>
            <ConfectionaryCard></ConfectionaryCard>
            <Service></Service>
        </div>
    );
};

export default Confectionary;