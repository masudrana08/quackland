import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Journey = () => {
  return (
    <div className='journeyC' id='mission'>
     <div>
      <h2><span className="mytext">Your Journey</span> Starts Now</h2>
      <div className='journeyImgContainer'>
         <img src='/images/sq.png' className="top"></img>
         <img className='main'  src="/images/journey.gif" alt="" />
         <img src='/images/sq.png' className="bottom"></img>
      </div>
     </div>
     <Row className='secondPart'>
       <Col md={4}>
          <h4>Explore Quack Land</h4>
          <p>Journey across the habitat, uncovering ancient secrets and discovering hidden treasures along the way.</p>
       </Col>
       <Col md={4}>
          <h4>Find The Lost Duckies</h4>
          <p>Once thought to be extinct, it is now your mission to seek out these elusive creatures and unlock the secrets of the Ducky Dynasty.</p>
       </Col>
       <Col md={4}>
          <h4>Defend The Dynasty</h4>
          <p>Beware of the monsters lurking in the shadows. It will require both brains and brawn to defeat these beasts.</p>
       </Col>
       <Col md={4}>
          <h4>Restore the Habitat</h4>
          <p>The land needs a bit of love to get its groove back. Daily duties will include maintenance of crops, livestock, and keeping things tidy.</p>
       </Col>
       <Col md={4}>
          <h4>Customize Your Equipment</h4>
          <p>Forge weapons, design gear, and craft tools to ensure survival and success on your epic mission.</p>
       </Col>
       <Col md={4}>
          <h4>Quack Pack</h4>
          <p>Community is an essential part of this game. You will build connections and collaborate with other players to restore Quack Land to greatness.</p>
       </Col>
     </Row>
    </div>
  )
}

export default Journey
