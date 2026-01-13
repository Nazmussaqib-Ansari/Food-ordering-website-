import React, { useContext } from "react";
import "../Css/ShopCategory.css";
import { ShopContext } from "../components/Context/ShopContext";
import dropdown from "../assets/dropdown.png";
import Item from "../items/item";


const ShopCatagory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <>
      <div className="shop-category">
        <img src={props.banner} alt="image" />
        <div className="shopCategory-indexSort">
          <p>
            <span>Showing 1-12 </span> out of 36 products
          </p>
          <div className="shopCategory-sort">
            Sort by <img src={dropdown} alt="icon"/>
          </div>
           </div>
           
          <div className="category-products">
            {all_product.map((item, i) => {
              if (props.category === item.category) {
                return (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                );
              } else {
                return   <></>
              }
            })}
          </div>
          <div className="shopCategory-loadmore">Explore More</div>
       
      </div>
    </>
  );
};

export default ShopCatagory;
