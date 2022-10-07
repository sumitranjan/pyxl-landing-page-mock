import React from "react";
import Benefits from "./components/Benefits/Benefits";
import Developers from "./components/Developers/Developers";
import Heading from "./components/Heading/Heading";
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
      <Developers/>
    </div>
  );
};

export default Homepage;
