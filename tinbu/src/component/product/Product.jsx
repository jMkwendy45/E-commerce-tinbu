import React from 'react';
import '../../styles/prdct.css';
import { menu_list,assets} from '../../assets/assets';

function Product() {
  return (
    <div className="products-container">
      <h1 className='top-txt'>Top Categories</h1>
      <div className="menu-grid">
        {menu_list.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.menu_image} alt={item.menu_name} className="products-image" />
            <div className="products-info">
              <p className="products-name">{item.menu_name}</p>
              <img src={assets.fowardicon} className="arrow"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;