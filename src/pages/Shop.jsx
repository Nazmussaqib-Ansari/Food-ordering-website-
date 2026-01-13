import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/offers/Offers";
import NewCollection from "../new-collections/NewCollection";
import NewsLetters from "../components/NewsLetters/NewsLetters";
const Shop = () => {
  return (
    <>
        <div>
          <Hero/>
          <Popular/>
          <Offers/>
          <NewCollection/>
          <NewsLetters/>
         
        </div>
    </>
  );
};

export default Shop;