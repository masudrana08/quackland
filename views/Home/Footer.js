import React from 'react'
import { FaTwitter, FaDiscord, FaMedium } from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='footerC'>
      <div>
        <input type="text" placeholder='Enter your email address' />
        <button>Subscribe</button>
      </div>
      <div>
        <p>Logo</p>
        <p>© 2021 Quack Squad. All Rights Reserved</p>
        <div>
          <FaTwitter />
          <FaDiscord />
          <FaMedium />
        </div>
      </div>
    </div>
  )
}
