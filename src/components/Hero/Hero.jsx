import React from "react";
import "./hero.css";
import hand from "../../assets/hand.png";
import arrow from "../../assets/arrow.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Best Deals !   Best Price !</h2>

        <div style={{ display: "flex" }}>
          <p>New</p>
          <img className="hand" src={hand} alt="lmage" />
        </div>

        <p>collection</p>
        <p>for everyones</p>

        <button className="collection-btn">
          <pre>Latest collection</pre>
          <img src={arrow} alt="logo" style={{width:"20px"}}/>
        </button>
        
      </div>

      <div className="hero-right">

        <img
        className="hero-img"
        src="https://png.pngtree.com/png-vector/20231224/ourmid/pngtree-smiling-young-woman-wearing-high-heels-with-a-bag-captured-in-png-image_11216153.png"
        alt="image" 
      />
      </div>

      
    </div>
  );
};

export default Hero;
