import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <div className="ml-8 lg:ml-36 mt-14 mb-14">
      <div className="text-xl font-medium breadcrumbs">
        <ul>
            <li>
             <Link to="/"><a>Home</a></Link> 
            </li>
            <li>
            <Link to="/confectionary"><a>Confectionary</a></Link>
            </li>
            <li>
            <Link to="/combo"><a>Combo</a></Link>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
