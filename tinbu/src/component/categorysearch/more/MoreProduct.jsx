import React from 'react';
import '../../../styles/moreproduct.css';
import {more_product,assets} from '../../../assets/assets'; // Assume this contains product data

function MoreProduct() {
  return (
    <div className="more-for-you-container">
      <h2 className="more-section-titles">More for you</h2>
       <div className="more-products-slider-container">
       <div className="more-products">
       <img src={assets.backwardarrow} alt='' className='slider-arrow left'/>

       {more_product.map((more_product, index) => (
          <div key={index} className="more-products-card">
            <img src={more_product.image} alt={more_product.name} className="more-products-image" />
            <h3 className="more-products-name">{more_product.name}</h3>
            <p className="more-products-description">{more_product.description}</p>
            <p className="more-products-price">₦{more_product.price}</p>
            <button className="add-to-cart-btn">Add to cart</button>
            
          </div>
        ))}
      <img src={assets.fowardarrow} alt='' className='slider-arrow left'/>
     <div className="more-slider-info">
             <p>Get started with these selections from our pharmacies. Click or swipe left or right direction to view more options.</p>
             <button className="view-all-btns">View all products</button>
           </div>
    
       </div> 
       
       
      {/* <div className="product-slider-container">
      <button className="slider-arrow left">‹</button>
      <div className="product-slider">
        {more_product.map((more_product, index) => (
          <div key={index} className="product-card">
            <img src={more_product.image} alt={more_product.name} className="product-image" />
            <h3 className="product-name">{more_product.name}</h3>
            <p className="product-description">{more_product.description}</p>
            <p className="product-price">{more_product.price}</p>
            <button className="add-to-cart-btn">Add to cart</button>
          </div>
        ))}
        <div className="slider-info">
             <p>Get started with these selections from our pharmacies. Click or swipe left or right direction to view more options.</p>
             <button className="view-all-btn">View all products</button>
           </div>
           </div>
        <button className="slider-arrow right">›</button>
      </div> */}
          </div> 
    </div>
  );
}

export default MoreProduct;






// import React from 'react';
// import '../../styles/moreForYou.css';
// import { products } from '../../assets/assets'; // Assume this contains product data

// function MoreForYou() {
//   return (
//     <div className="more-for-you-container">
//       <h2 className="section-title">More for you</h2>
//       <div className="product-slider-container">
//         <button className="slider-arrow left">‹</button>
//         <div className="product-slider">
//           {products.map((product, index) => (
//             <div key={index} className="product-card">
//               <img src={product.image} alt={product.name} className="product-image" />
//               <h3 className="product-name">{product.name}</h3>
//               <p className="product-description">{product.description}</p>
//               <p className="product-price">{product.price}</p>
//               <button className="add-to-cart-btn">Add to cart</button>
//             </div>
//           ))}
//           <div className="slider-info">
//             <p>Get started with these selections from our pharmacies. Click or swipe left or right direction to view more options.</p>
//             <button className="view-all-btn">View all products</button>
//           </div>
//         </div>
//         <button className="slider-arrow right">›</button>
//       </div>
//     </div>
//   );
// }

// export default MoreForYou;