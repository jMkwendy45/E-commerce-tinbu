// import React from "react";
// import "../../../styles/moreproduct.css";
// import { more_product, assets } from "../../../assets/assets";
// import { Link } from "react-router-dom";
// function MoreProduct() {
//   return (
//     <div className="more-for-you-container">
//       <h2 className="more-section-titles">More for you</h2>
//       <div className="more-products-slider-container">
//         <div className="more-products">
//           <img
//             src={assets.backwardarrow}
//             alt=""
//             className="slider-arrow left"
//           />

//           {more_product.map((more_product, index) => (
//             <div key={index} className="more-products-card">
//               <img
//                 src={more_product.image}
//                 alt={more_product.name}
//                 className="more-products-image"
//               />
//               <h3 className="more-products-name">{more_product.name}</h3>
//               <p className="more-products-description">
//                 {more_product.description}
//               </p>
//               <p className="more-products-price">₦{more_product.price}</p>
//               <Link to="/addtocart">
//                 <button className="add-to-cart-btn">Add to cart</button>
//               </Link>
//             </div>
//           ))}
//           <img src={assets.fowardarrow} alt="" className="slider-arrow left" />
//           <div className="more-slider-info">
//             <p>
//               Get started with these selections from our pharmacies. Click or
//               swipe left or right direction to view more options.
//             </p>
//             <Link to="/allproduct">
//               <button className="view-all-btns">View all products</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MoreProduct;



// import '../../styles/prdct.css';
// import { menu_list,assets} from '../../assets/assets';

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// function Product() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           'https://timbu-get-all-products.reavdev.workers.dev/',
//           {
//             params: {
//               organization_id: "70b796a5c4a2483299cd98123aa6be36",
//               reverse_sort: false,
//               page: 1,
//               size: 5, // Increase this if you have more than 100 products
//               Appid: "6R7Y91SSAU3P9E7",
//               Apikey: "48707383e0b14785a487d34226c2d3b920240713143057424918",
//             },
//             headers: {
//               'Content-Type': 'application/json',
//               'Accept': 'application/json',
//             }
//           }
//         );

//         if (response.data && response.data.items) {
//           // Filter products with quantity 6 or more
//           const filteredProducts = response.data.items.filter(product => product.quantity >= 6);
//           setProducts(filteredProducts);
//         } else {
//           setError(new Error("Invalid response format"));
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (products.length === 5) return <p>No products available with quantity 6 or more.</p>;

//   return (
//     <div className="products-container">
//       <h1 className='top-txt'>Top Categories</h1>
//       <div className="menu-grid">
//         {products.map((product, index) => (
//           <div key={index} className="menu-item">
//             <img 
//               src={product.photos && product.photos.length > 0 
//                 ? `https://api.timbu.cloud/images/${product.photos[0].url}`
//                 : 'path/to/fallback-image.jpg'} 
//               alt={product.name} 
//               className="products-image" 
//             />
//             <div className="products-info">
//               <p className="products-name">{product.name}</p>
//               <img src={assets.fowardicon} className="arrow" alt="forward"/>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// export default Product;



























// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../styles/availableproduct.css";
// import { Link } from "react-router-dom";

// const ProductCard = ({ image, name, price, description }) => (
//   <div className="product-card">
//     <img src={image} alt={name} className="product-image" />
//     <h3 className="product-name">{name}</h3>
//     <p className="product-description">{description}</p>
//     <p className="product-price">₦{price}</p>
//     <Link to="/addtocart">
//       <button className="add-to-cart-btn">Add to Cart</button>
//     </Link>
//   </div>
// );

// const AvailableProduct = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           'https://timbu-get-all-products.reavdev.workers.dev/',
//           {
//             params: {
//               organization_id: "70b796a5c4a2483299cd98123aa6be36",
//               reverse_sort: false,
//               page: page,
//               size: 10,
//               APP_ID: "6R7Y91SSAU3P9E7",
//               API_KEY: "48707383e0b14785a487d34226c2d3b920240713143057424918,"
//             }
//           }
//         );
//         if (response.data && response.data.items) {
//           setProducts(response.data.items);
//           setTotalPages(Math.ceil(response.data.total / response.data.size));
//         } else {
//           setError(new Error("Invalid response format"));
//         }
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [page]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (!products || products.length === 0) return <p>No products available.</p>;

//   return (
//     <div className="product-grid-container">
//       <h2 className="grid-title">Available products</h2>
//       <div className="product-grid">
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             image={product.product_image && product.product_image.length > 0 ? product.product_image[0].url : 'default-image.jpg'}
//             name={product.name}
//             price={product.selling_price || 'N/A'}
//             description={product.description}
//           />
//         ))}
//       </div>
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <span
//             key={index}
//             className={`page-number ${index + 1 === page ? 'active' : ''}`}
//             onClick={() => setPage(index + 1)}
//           >
//             {index + 1}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AvailableProduct;


import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../styles/moreproduct.css";
import { more_product, assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
const ProductCard = ({ image, name, selling_price, description }) => (
  <div className="product-card">
    <img 
      src={image} 
      alt={name} 
      className="product-image" 
    />
    <h3 className="product-name">{name}</h3>
    <p className="product-description">{description}</p>
    <p className="product-price">₦{selling_price}</p>
    <Link to="/addtocart">
      <button className="add-to-cart-btn">Add to Cart</button>
    </Link>
  </div>
);

const MoreProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://timbu-get-all-products.reavdev.workers.dev/',
          {
            params: {
              organization_id:"70b796a5c4a2483299cd98123aa6be36",
              reverse_sort: false,
              page: 1,
              size: 100,
              Appid:"6R7Y91SSAU3P9E7",
              Apikey:"48707383e0b14785a487d34226c2d3b920240713143057424918",    
            },
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }
          }
        );

        if (response.data && response.data.items) {
          setProducts(response.data.items);
          setTotalPages(Math.ceil(response.data.total / response.data.size));
        } else {
          setError(new Error("Invalid response format"));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!products || products.length === 0) return <p>No products available.</p>;

  return (
    <div className="product-grid-container">
      <h2 className="grid-title">More Product</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.photos && product.photos.length > 0 
              ? `https://api.timbu.cloud/images/${product.photos[0].url}`
              : 'path/to/fallback-image.jpg'}
            name={product.name}
            price={product.selling_price || 'N/A'}
            description={product.description}
          />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            className={`page-number ${index + 1 === page ? 'active' : ''}`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MoreProduct;