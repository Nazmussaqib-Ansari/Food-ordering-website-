import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/547/178/non_2x/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg"
            alt="logo"
            height="40px"
          />
          <p>MegaKart</p>
        </div>

        <ul className="footer-links">
          <li>About</li>
          <li>Products</li>
          <li>Officials</li>
          <li>Company</li>
          <li>Contact</li>
        </ul>

        <div className="footer-social-icon">
          <img
            src="https://png.pngtree.com/png-clipart/20180524/ourmid/pngtree-instagram-social-media-icon-png-image_3572472.png"
            alt="icon"
            height="50px "
          />

          <img
            src="https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png"
            alt="icon"
            height="50px"
          />

          <img
            src="https://static.vecteezy.com/system/resources/previews/024/398/617/non_2x/whatsapp-logo-icon-isolated-on-transparent-background-free-png.png"
            alt="icon"
            height="50px"
          />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
