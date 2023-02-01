import React from "react";

import MyNavbar from "./MyNavbar";
import Header from "./Header";
import Journey from "./Journey";
import Roadmap from "./Roadmap";
import FAQ from "./FAQ";
import Team from "./Team";
import Footer from "./Footer";
import Head from "next/head";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Quackland | NFT Application</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div className='headerContainer'>
          <MyNavbar />
          <Header />
        </div>
        <Journey/>
        <Roadmap/>
        <FAQ/>
        <Team/>
        <Footer />
    </div>
  );
};

export default Index;
