import React from "react";

const Roadmap = () => {
  return (
    <div className='roadmapC'>
      <h2>Roadmap</h2>
      <div className="inner">
        <div className='phase1'>
          <h3>Phase 1</h3>
          <li>
            Website & Social Community Building
          </li>
          <li>
            White List
          </li>
          <li>
            Community Board - Vote NFT arts and attributes
          </li>
        </div>
        <div className='phase2'>
          <div className="phase-inner">
            <h3>Phase 2</h3>
            <li>
              Minting (Pre-sale & Public)
            </li>
            <li>
              Tokenomics
            </li>
            <li>
              Community Board - Auction & donation
            </li> 
          </div>
        </div>
        <div className='phase3'>
          <h3>Phase 3</h3>
          <li>Staking </li>
          <li>Breeding</li>
          <li>Community Board - Game Feedback</li>
        </div>
        <div className='phase4'>
          <div className="phase-inner">
            <h3>Phase 4</h3>
            <li>Quack Land Game Beta Testing? </li>
            <li> Community Board - Leadership Board & Prize Raffles</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
