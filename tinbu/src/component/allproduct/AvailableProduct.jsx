import React from 'react';
import '../../styles/availableproduct.css';
import{availableProduct} from '../../assets/assets/'

const ProductCard = ({ image, name, price,description }) => (
  <div className="product-card">
    <img src={image} alt={name} className="product-image" />
    <h3 className="product-name">{name}</h3>
    <p className="product-description">{description}</p>
   <p className="product-price">₦{price}</p>
    <button className="add-to-cart-btn">Add to Cart</button>
  </div>
);

const AvailableProduct = () => (
  <div className="product-grid-container">
    <h2 className="grid-title">Available products</h2>
    <div className="product-grid">
      {availableProduct.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
    <div className="pagination">
      <span className="page-number">1</span>
    </div>
  </div>
);

export default AvailableProduct;














// import React from 'react';
// import '../../styles/availableproduct.css';
// import { paracetamol, Vitabolic, NatureField } from '../../assets/assets/';

// const ProductCard = ({ image, name, price, description }) => (
//   <div className="product-card">
//     <img src={image} alt={name} className="product-image" />
//     <h3 className="product-name">{name}</h3>
//     <p className="product-description">{description}</p>
//     <p className="product-price">${price}</p>
//     <button className="add-to-cart-btn">Add to Cart</button>
//   </div>
// );

// const AvailableProduct = () => (
//   <div className="product-grid-container">
//     <h2 className="grid-title">Available products</h2>
//     <div className="product-grid">
//       {availableProduct.map((product) => (
//         <ProductCard key={product._id} {...product} />
//       ))}
//     </div>
//     <div className="pagination">
//       <span className="page-number">1</span>
//     </div>
//   </div>
// );

// export default AvailableProduct;

// export const availableProduct = [
//   {
//     _id: "1",
//     name: "Paracetamol",
//     image: paracetamol,
//     price: 12,
//     description: "Emzor Paracetamol, 500g Tabs blister X 12"
//   },
//   {
//     _id: "2",
//     name: "Feroglobin",
//     image: Vitabolic,
//     price: 18,
//     description: "Feroglobin Capsule Tabs X 14",
//   },
//   {
//     _id: "3",
//     name: "Nature's Field Vitamin C",
//     image: NatureField,
//     price: 16,
//     description: "Nature's Field Vitamin C 1000mg",
//   },
//   // ... (repeat for other products, updating names and descriptions as needed)
// ];