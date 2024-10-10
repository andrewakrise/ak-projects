// src/App.js
import React from "react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <main className="main-app">
      <Header />
      <div className="main-app-body">
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
      </div>
      <Footer />
    </main>
  );
}

export default App;
