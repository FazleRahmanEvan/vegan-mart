import React, { useEffect, useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import ConfectionaryCard from './ConfectionaryCard';
import Service from '../../Home/Service/Service';

const Confectionary = () => {
    const [confec, setConfec]=useState([]);

    useEffect ( () => {
        fetch('https://vegan-mart-server.vercel.app/confectionary')
        .then(res => res.json())
        .then(data => setConfec(data));
    }, [])
    return (
        <div>
            <Breadcrumbs></Breadcrumbs>
            <div className="mt-14 pb-10 lg:px-9 ml-10 gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3">
            {
                confec.map(confect =><ConfectionaryCard 
                key={confect.id}
                confectionary={confect}
                />)
               }
               </div>
            <Service></Service>
        </div>
    );
};

export default Confectionary;