import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <div className='headerC' >
      <div className='headerBgContainer'>
          <img src="/images/banner-bg.png" alt="" />
        
      <Row className='headerContent'>
        <Col md={6} className='headerLeft'>
          <h1>Welcome to Quack Land</h1>
          <p>You've embarked on a quest across a decentralized Web3 NFT-based adventure game, built on BSC & Polygon.</p>
          <p> Armed with only basic tools and a few tokens, you have been tasked with uncovering the lost Duck dynasty. Defend the habitat and restore Quack Land to greatness!</p>
          <div className='headerBtnContainer'>
            <button>Join Discord</button>
            <p>Follow Twitter</p>
          </div>
          <div className='partnerContainer'>
            <img className='hideInMobile' src='/images/partners.png' alt="partners" />
          </div>
        </Col>
        <Col md={6} className='headerRightImgContainer'>
          <img src='/images/duckie_shiba.png' alt="Header Image" />
        </Col>
      </Row>
      </div>
    </div>
  )
}

export default Header
