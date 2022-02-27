import React from "react";
import { Col, Row } from "react-bootstrap";

import { FaTwitter } from 'react-icons/fa'

const Team = () => {
  return (
    <div className='teamC'>
      <div className="sectionA">
        <h2>Meet The team</h2>
        <p>We are your Quack Pack of misfits, techies, creatives, and online entrepreneurs who love to nerd out all over NFT and games.  We've designed, developed, and operated across software, gaming, blockchain, and consumer-focused verticals. We offer you an opportunity to create, collect, and collaborate together in a decentralized world with one common goal, to Duck shi*t up</p>
      </div>
      <Row className='sectionB'>
        <Col>
          <img src="/images/nonfunguy.png" alt="" />
          <div className='cardContent'>
            <div>
              <h5>NonFunGuy</h5>
              <p>Operations</p>
            </div>
            <div>
              <FaTwitter />
            </div>
          </div>
        </Col>
        <Col>
          <img src="/images/heartyi.png" alt="" />
          <div className='cardContent'>
            <div>
              <h5>HeartYi</h5>
              <p>Software Developer</p>
            </div>
            <div>
              <FaTwitter />
            </div>
          </div>
        </Col>
        <Col>
          <img src="/images/sheezoreal.png" alt="" />
          <div className='cardContent'>
            <div>
              <h5>Sheezoreal</h5>
              <p>Community</p>
            </div>
            <div>
              <FaTwitter />
            </div>
          </div>
        </Col>
        <Col>
          <img src="/images/czardy.png" alt="" />
          <div className='cardContent'>
            <div>
              <h5>Czardy</h5>
              <p>Artist</p>
            </div>
            <div>
              <FaTwitter />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Team;
