import React from "react";
import "../Css/LoginSignup.css"

function LoginSignup(){
  return (
    <>
    <div className="login_signup">
      <form action="">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
         <div className="loginSignup-field">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Enter Email Address"  />
          <input type="password" placeholder="password" />
           <button>Continue</button>
         </div>
        
         <p className="loginSignup-login">
           Already have an account ? <span>Login here</span>
         </p>
         <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms ofuse & privacy policy.</p>
         </div>
      </div>
      </form>

    </div>
      
    </>
  );
};

export default LoginSignup;