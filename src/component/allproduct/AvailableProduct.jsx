

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/availableproduct.css";
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

const AvailableProduct = () => {
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
              organization_id: "70b796a5c4a2483299cd98123aa6be36",
              reverse_sort: false,
              page: page,
              size: 10,
              Appid: "6R7Y91SSAU3P9E7",
              Apikey: "48707383e0b14785a487d34226c2d3b920240713143057424918",
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
      <h2 className="grid-title">Available products</h2>
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

export default AvailableProduct;