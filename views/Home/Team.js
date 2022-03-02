import React from "react";
import { Card, Col, Row } from "react-bootstrap";

// import { FaTwitter } from 'react-icons/fa'

const Team = () => {
  return (
    <div className='teamC'>
      <div className="sectionA">
        <h2>Meet The Team</h2>
        <p>We are your Quack Pack of misfits, techies, creatives, and online entrepreneurs who love to nerd out all over NFT and games.  We've designed, developed, and operated across software, gaming, blockchain, and consumer-focused verticals. We offer you an opportunity to create, collect, and collaborate together in a decentralized world with one common goal, to Duck shi*t up</p>
      </div>
      <Row className='cardContainer'>
        <Col className='card-inner' xs={12} sm={6} md={3}>
          <div className="mycard">
            <div className='imgCont'>
              <img src="/images/nonfunguy.png" alt="" />
            </div>
            <div className="content-part">
              <div>
                <h5>NonFunGuy</h5>
                <p>Operations</p>
              </div>
              <div className='tweetCont'>
                <img src="/images/twitter2.png" alt="" />
              </div>
            </div>
          </div>
        </Col>
        <Col className='card-inner' xs={12} sm={6} md={3}>
          <div className="mycard">
            <div className='imgCont'>
              <img src="/images/heartyi.png" alt="" />
            </div>
            <div className="content-part">
              <div>
                <h5>HeartYi</h5>
                <p>Software Developer</p>
              </div>
              <div className='tweetCont'>
                <img src="/images/twitter2.png" alt="" />
              </div>
            </div>
          </div>
        </Col>
        <Col className='card-inner' xs={12} sm={6} md={3}>
          <div className="mycard">
            <div className='imgCont'>
              <img src="/images/sheezoreal.png" alt="" />
            </div>
            <div className="content-part">
              <div>
                <h5>Sheezoreal</h5>
                <p>Community</p>
              </div>
              <div className='tweetCont'>
                <img src="/images/twitter2.png" alt="" />
              </div>
            </div>
          </div>
        </Col>
        <Col className='card-inner' xs={12} sm={6} md={3}>
          <div className="mycard">
            <div className='imgCont'>
              <img src="/images/czardy.png" alt="" />
            </div>
            <div className="content-part">
              <div>
                <h5>Czardy</h5>
                <p>Artist</p>
              </div>
              <div className='tweetCont'>
                <img src="/images/twitter2.png" alt="" />
              </div>
            </div>
          </div>
        </Col>
        
      </Row>
    </div>
  );
};

export default Team;
