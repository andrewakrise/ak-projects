// src/App.js
import React from "react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactMeSection />
      <Footer />
    </main>
  );
}

export default App;
