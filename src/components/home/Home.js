import React from "react";
import ContactSection from "./ContactSection";
import JumbotronHome from "./JumbotronHome";
import Profile from "./Profile";
import ProjectsSection from "./ProjectsSection";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <div className="wrapper">
        <JumbotronHome></JumbotronHome>
        <Profile></Profile>
        <ProjectsSection></ProjectsSection>
        <ContactSection></ContactSection>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
