import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../assets/remove_icon.png'
import { ShopContext } from '../components/Context/ShopContext'
const CardItems = () => {
  const {getTotalCartAmount,all_product,cartItem,removeFromCart} = useContext(ShopContext);
  return (
    
      <div className="cartitems">
        <div className="cartitems-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        { all_product.map((e, i)=>{
          if(cartItem[e.id]>0){
            return  <div key={i}>
          <div className="carditems-format cartitems-format-main">
            <img src={e.image} alt="" className='carticon-product-icon' height='100px'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'>{cartItem[e.id]}</button>
            <p>${e.new_price*cartItem[e.id]}</p>
            <img src={remove_icon} alt="" height='20px' onClick={()=>removeFromCart(e.id)}/>
          </div>
          <hr />
        </div> 
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
              <div className="cartitem-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />

              <div className="cartitem-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />

              <div className="cartitem-total-item">
                <p>Total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
           <div className="cartitem-promocode">
            <p>If you have a promo code, Enter it here </p>
            <div className="cartitem-promobox">
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>
            </div>
           </div>
        </div>
      </div>
   
  )
}

export default CardItems;