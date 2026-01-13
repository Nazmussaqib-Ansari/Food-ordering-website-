import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import { ShopContext } from "../Context/ShopContext";
const ProductDisplay = ({ product }) => {
  
  const {addToCart} = useContext(ShopContext);
  return (
    //item pr click krne pr ye item ki details show krega.
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="image" height="150px" />
          <img src={product.image} alt="image" height="150px" />
          <img src={product.image} alt="image" height="150px" />
          <img src={product.image} alt="image" height="150px" />
        </div>

        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="image"
            height="500px"
          />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="icon" height="30px" />
          <img src={star_icon} alt="icon" height="30px" />
          <img src={star_icon} alt="icon" height="30px" />
          <img src={star_icon} alt="icon" height="30px" />
          <p>(130)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>

        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          obcaecati, ea eligendi aliquam labore eius perferendis totam omnis
          excepturi sunt impedit delectus natus dignissimos modi, soluta
          voluptates, magni optio distinctio!
        </div>

        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="select-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <div className="productdisplay-right-category">
          <span>
            Category: <span>Women,T-Shirt, Crop top</span>
          </span>
        </div>

        <div className="productdisplay-right-category">
          <span>
            Tags: <span>Modern, Latest, Trend Shorts</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
