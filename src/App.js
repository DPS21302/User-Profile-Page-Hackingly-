// App.js
import React from "react";
import Skills from "./components/Skills";
import HackathonHistory from "./components/HackathonHistory";
import ProjectsShowcase from "./components/ProjectsShowcase";
import EngagementMetrics from "./components/EngagementMetrics";
import darshit from "./components/images/Darshit.jpg";
import "./App.css"; // Add your custom styling here

function App() {
  return (
    <>
      <header>
        <img src={darshit} alt={"pic"} />
        <h1>Darshit Sojitra</h1>
      </header>

      <Skills />
      <HackathonHistory />
      <ProjectsShowcase />
      <EngagementMetrics />
    </>
  );
}

export default App;
