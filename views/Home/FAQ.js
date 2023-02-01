import React from 'react'
import { Accordion } from 'react-bootstrap'
import Collapsible from 'react-collapsible'

const FAQ = () => {
  return (
    <div className="faqC" id="faq">
      <h2 className="title">Frequently Asked Question</h2>
      <div className="inner">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to join with the team?</Accordion.Header>
            <Accordion.Body>
            If you're interested in joining the Quackland team, you may want to check their website or social media accounts for current job openings or internship opportunities. You could also reach out to their HR or recruitment department with your resume and a brief cover letter explaining why you'd be a good fit for their team. Don't hesitate to showcase your relevant skills and experiences that align with their goals and values.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What benefits will the Community have?
            </Accordion.Header>
            <Accordion.Body>
              The community benefits from Quackland as a NFT platform can vary, but some common advantages include access to unique and valuable digital assets, potential financial gains from buying and selling NFTs, and a supportive and engaged community of NFT enthusiasts and collectors. Additionally, the platform may offer educational resources, tools and features to help users better understand and navigate the NFT space.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              In what way will the Community Wallet Funds be used?
            </Accordion.Header>
            <Accordion.Body>
              The Community Wallet Funds in Quackland are typically used to support and benefit the community in various ways, such as funding projects and initiatives that align with the community's goals and values, supporting NFT artists and creators, providing rewards and incentives to active members, and contributing to the maintenance and development of the platform. The exact use of the funds may depend on the decisions made by the community through voting or other democratic processes.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Where can I connect with the community?
            </Accordion.Header>
            <Accordion.Body>
              You can connect with the Quackland community through various online platforms such as social media (e.g. Twitter, Facebook, Telegram), forums, or community-focused websites. You can also join community-organized events, such as virtual meetups or workshops. Another option is to participate in community discussions or debates through online forums, Discord channels or other communication channels. Joining the community and being an active participant can help you stay informed about the latest developments and opportunities within the Quackland ecosystem.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ
