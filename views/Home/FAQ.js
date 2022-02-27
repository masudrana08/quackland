import React from "react";
import { Accordion } from "react-bootstrap";
import Collapsible from "react-collapsible";

const FAQ = () => {
  return (
    <div className='faqC'>
      <h2 className='title'>Frequently Asked Question</h2>
      <div className="inner">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to join with the team?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin pharetra ultrices.Fusce elit libero, venenatis vel consequat in,
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What benefits will the Community have?</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin pharetra ultrices.Fusce elit libero, venenatis vel consequat in,
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>In what way will the Community Wallet Funds be used?</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin pharetra ultrices.Fusce elit libero, venenatis vel consequat in,
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Where can I connect with the community?</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin pharetra ultrices.Fusce elit libero, venenatis vel consequat in,
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};



export default FAQ;
