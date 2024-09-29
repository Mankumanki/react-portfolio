import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import JobCard from "./WorkCard1";
import projectImg from "../img/livelink.png";
import experience from "../data";
import projectImg2 from "../img/ServiceNow.jpg";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <JobCard data={experience[0]} />
      <JobCard data={experience[1]} />
      <Footer />
    </div>
  );
}

export default App;
export { projectImg, projectImg2 };
