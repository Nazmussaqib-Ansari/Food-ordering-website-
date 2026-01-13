import React from 'react'
import "./NewsLetters.css"
const NewsLetters = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay update </p>
        <div>
            <input type="email" placeholder='Enter Your Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetters;