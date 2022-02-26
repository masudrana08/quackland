import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Journey from "./Journey";
import Roadmap from "./Roadmap";
import FAQ from "./FAQ";
import Team from "./Team";
import Footer from "./Footer";

const Index = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Journey/>
        <Roadmap/>
        <FAQ/>
        <Team/>
        <Footer />
    </div>
  );
};

export default Index;
