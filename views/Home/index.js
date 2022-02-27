import React from "react";

import MyNavbar from "./MyNavbar";
import Header from "./Header";
import Journey from "./Journey";
import Roadmap from "./Roadmap";
import FAQ from "./FAQ";
import Team from "./Team";
import Footer from "./Footer";

const Index = () => {
  return (
    <div>
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
