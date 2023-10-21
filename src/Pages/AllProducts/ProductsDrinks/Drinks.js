import React, { useEffect, useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import DrinksCard from './DrinksCard';
import Service from '../../Home/Service/Service';

const Drinks = () => {
    const [drink, setDrink]=useState([]);

    useEffect ( () => {
        fetch('https://vegan-mart-server.vercel.app/drinks')
        .then(res => res.json())
        .then(data => setDrink(data));
    }, [])
    return (
        <div>
            <Breadcrumbs></Breadcrumbs>
            
            <div className="mt-14 pb-10 lg:px-9 ml-10 gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3">
            {
                drink.map(drink =><DrinksCard
                key={drink.id}
                drink={drink}
                />)
               }
               </div>
              <Service></Service>
        </div>
    );
};

export default Drinks;