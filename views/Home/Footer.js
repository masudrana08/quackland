import React from 'react'
import { FaTwitter, FaDiscord } from 'react-icons/fa'
import {AiOutlineMedium} from 'react-icons/ai'
import { FormControl, InputGroup } from 'react-bootstrap'
export default function Footer() {
  return (
    <div className='footerC'>
      <div className='subscribe'>
      <div className='innerSub'>
        <div>
          <h5>Join Newsletter!</h5>
            <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter your email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text style={{cursor:'pointer'}} id="basic-addon2">Subscribe</InputGroup.Text>
          </InputGroup>
        </div>
      </div>
      </div>
      <div className='hideInDesktop footerIcon'>
        <div className='footLogo'>
          <img src="/images/logo.png" alt="" />
        </div>
          <div className='d-flex'>
            <div className='icon-bg'><img src='/images/medium.png' /></div>
            <div className='icon-bg'><img src='/images/twitter.png' /></div>
            <div className='icon-bg'><img src='/images/discord.png' /></div>
          </div>
        </div>
      <div className='footer-bottom'>
        <div style={{width:'206px'}} className='hideInMobile'>
          <img src="/images/logo.png" alt="" />
        </div>
        <div>
          <p>© 2021 Quack Squad. All Rights Reserved</p>
        </div>
        <div className='hideInMobile'>
          <div className='d-flex '>
            <div className='icon-bg'><img onClick={()=>window.open("https://medium.com")} src='/images/medium.png' /></div>
            <div className='icon-bg'><img onClick={()=>window.open("https://twitter.com")} src='/images/twitter.png' /></div>
            <div className='icon-bg'><img onClick={()=>window.open("https://discord.com")} src='/images/discord.png' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
