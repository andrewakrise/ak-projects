import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./Card";

const projects = [
  {
    id: 5,
    title: "Online Chess Game",
    description: "Online chess game for having a fun",
    getImageSrc: () => require("../images/online-chess.png"),
    link: "https://chess-two-players.herokuapp.com/",
  },
  {
    id: 6,
    title: "Music App",
    description:
      "Created Music app, but not finished, in progress to add music library and then you can enjoy the music",
    getImageSrc: () => require("../images/music-player.png"),
    link: "https://music-player-ak.herokuapp.com/",
  },
  {
    id: 7,
    title: "Time tracker",
    description:
      "Web app for create and count your timing for work or anything else",
    getImageSrc: () => require("../images/time-track3.png"),
    link: "https://time-track.herokuapp.com/",
  },
  {
    id: 8,
    title: "DJ_Web App",
    description: "DJ page or a web app, responsive, adaptive, simple",
    getImageSrc: () => require("../images/dj-web-app.png"),
    link: "https://www.djsrise.com/",
  },
  {
    id: 9,
    title: "Agents Dashboard",
    description:
      "Dashboard to collect, analize and display the data of agents, with interacrtive charts created from scratch",
    getImageSrc: () => require("../images/agents-dashboard.png"),
    link: "https://www.youtube.com/watch?v=8iqvGfCUnsI&ab_channel=AndrewKukhar/",
  },
  {
    id: 10,
    title: "VanDJs Club",
    description:
      "Web app in progress... React, Node.js, MongoDB, Image libraries, JWT, Heroku",
    getImageSrc: () => require("../images/vandjsclub.png"),
    link: "https://www.vandjs.club/",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      className="full-screen-section"
    >
      <Box sx={{ flexGrow: 1 }} className="projects-section">
        <Typography
          variant="h4"
          component="h1"
          id="projects-section"
          gutterBottom
          textAlign="center"
          sx={{ width: "100%", px: 1, pb: 2 }}
        >
          Featured Projects
        </Typography>
        <div className="projects-section-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
              link={project.link}
            />
          ))}
        </div>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
