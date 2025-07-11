import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { currency } from "../../App"; // Removed backend_url import since we're hardcoding

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const backendUrl = "https://sneaker-website-1.onrender.com"; // Defined here for clarity

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={`${backendUrl}${product.image}`} alt="Product thumbnail" />
          <img src={`${backendUrl}${product.image}`} alt="Product thumbnail" />
          <img src={`${backendUrl}${product.image}`} alt="Product thumbnail" />
          <img src={`${backendUrl}${product.image}`} alt="Product thumbnail" />
        </div>
        <div className="productdisplay-img">
          <img 
            className="productdisplay-main-img" 
            src={`${backendUrl}${product.image}`} 
            alt="Main product" 
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="Star rating" />
          <img src={star_icon} alt="Star rating" />
          <img src={star_icon} alt="Star rating" />
          <img src={star_icon} alt="Star rating" />
          <img src={star_dull_icon} alt="Empty star" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {currency}{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            {currency}{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>42</div>
            <div>43</div>
            <div>44</div>
            <div>45</div>
            <div>46</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category :</span> {product.category || 'Sneakers'}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
