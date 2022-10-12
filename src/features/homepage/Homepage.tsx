import React from "react";
import Benefits from "./components/Benefits/Benefits";
import Designers from "./components/Designers/Designers";
import Developers from "./components/Developers/Developers";
import Footer from "./components/footer/Footer";
import Heading from "./components/Heading/Heading";
import Manages from "./components/Manages/Manages";
import Navbar from "./components/Navbar/Navbar";
import Remote from "./components/Remote/Remote";
import RemoteDevelopers from "./components/RemoteDevelopers/RemoteDevelopers";
import Turing from "./components/Turing/Turing";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <Benefits />
      <Remote />
      <RemoteDevelopers />
      <Turing />
      <Developers />
      <Designers />
      <Manages />
      <Footer />
    </div>
  );
};

export default Homepage;
