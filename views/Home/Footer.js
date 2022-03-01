import React from 'react'
import { FaTwitter, FaDiscord } from 'react-icons/fa'
import {AiOutlineMedium} from 'react-icons/ai'
import { FormControl, InputGroup } from 'react-bootstrap'
export default function Footer() {
  return (
    <div className='footerC'>
      <div className='subscribe'>
        {/* <div>
        <div className="inner">
          <input type="text" placeholder='Enter your email address' />
          <button>Subscribe</button>
        </div>
        </div> */}
        <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter your email address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
      </InputGroup>
      </div>
      <div className='hideInDesktop footerIcon'>
        <div>
          <img src="/images/logo.png" alt="" />
        </div>
          <div className='d-flex'>
            <div className='icon-bg'><img src='/images/medium.png' /></div>
            <div className='icon-bg'><img src='/images/twitter.png' /></div>
            <div className='icon-bg'><img src='/images/discord.png' /></div>
          </div>
        </div>
      <div className='footer-bottom'>
        <div className='hideInMobile'>
          <img src="/images/logo.png" alt="" />
        </div>
        <div>
          <p>© 2021 Quack Squad. All Rights Reserved</p>
        </div>
        <div className='hideInMobile'>
          <div className='d-flex'>
            <div className='icon-bg'><img src='/images/medium.png' /></div>
            <div className='icon-bg'><img src='/images/twitter.png' /></div>
            <div className='icon-bg'><img src='/images/discord.png' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
