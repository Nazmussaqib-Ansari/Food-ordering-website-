import React, { useContext } from "react";
import { ShopContext } from "../components/Context/ShopContext";
import { useParams } from "react-router";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import BredCrums from "../components/BredCrums/bredCrums";




const Products = () => {
  const {all_product}=useContext(ShopContext)
  
  //  hm chahte h ki hm jis product pr click kre uski details khul kr aa jaye.
  //     Iske liye App.jsx me path me product.id de rakhi .

  const {productId}=useParams();
  const product = all_product.find((e)=> e.id == productId)
    return (
    <>
     <BredCrums product={product}/>
     <ProductDisplay product={product}/>
    </>
  );
};

export default Products;