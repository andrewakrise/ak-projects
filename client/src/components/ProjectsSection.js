import React from "react";
import FullScreenSection from "./FullScreenSection";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
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
      p={4}
      alignItems="center"
      spacing={8}
      sx={{ minWidth: "100%" }}
    >
      <Typography
        variant="h4"
        component="h1"
        id="projects-section"
        gutterBottom
      >
        Featured Projects
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                imageSrc={project.getImageSrc()}
                link={project.link}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
