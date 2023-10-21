import React, { useEffect, useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import Service from '../Home/Service/Service';
import ComboCard from './ComboCard';

const Combo = () => {
  const [combo, setCombo]=useState([]);

  useEffect ( () => {
      fetch('https://vegan-mart-server.vercel.app/combo')
      .then(res => res.json())
      .then(data => setCombo(data));
  }, [])
    return (
      <div>
      <Breadcrumbs></Breadcrumbs>
      
      <div className="mt-14 pb-10 lg:px-9 ml-10 gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3">
      {
          combo.map(combo =><ComboCard
          key={combo.id}
          combo={combo}
          />)
         }
         </div>
        <Service></Service>
  </div>
    );
};

export default Combo;