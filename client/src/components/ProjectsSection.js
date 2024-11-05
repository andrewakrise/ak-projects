import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "online-chess",
    title: "Online Chess Game",
    description: "Online chess game for having a fun",
    getImageSrc: () => require("../images/online-chess.png"),
    link: "https://chess-two-players.herokuapp.com/",
  },
  {
    id: "music-app",
    title: "Music App",
    description:
      "Created Music app, but not finished, in progress to add music library and then you can enjoy the music",
    getImageSrc: () => require("../images/music-player.png"),
    link: "https://music-player-ak.herokuapp.com/",
  },
  {
    id: "old-dj-app",
    title: "OLD_DJ_Web App",
    description: "DJ page or a web app, responsive, adaptive, simple",
    getImageSrc: () => require("../images/dj-web-app.png"),
    link: "https://www.djsrise.com/",
  },

  {
    id: "agent-dashboard",
    title: "Agents Dashboard",
    description:
      "Dashboard to collect, analize and display the data of agents, with interacrtive charts created from scratch",
    getImageSrc: () => require("../images/agents-dashboard.png"),
    link: "https://www.youtube.com/watch?v=8iqvGfCUnsI&ab_channel=AndrewKukhar/",
  },
  {
    id: "vandjs-club",
    title: "VanDJs Club",
    description:
      "Web app in progress... React, Node.js, MongoDB, Image libraries, JWT, Heroku",
    getImageSrc: () => require("../images/vandjsclub.png"),
    link: "https://www.vandjs.club/",
  },
  {
    id: "new-dj-app",
    title: "DJ_Web App",
    description: "DJ page or a web app, responsive, adaptive, simple",
    getImageSrc: () => require("../images/dj-web-app.png"),
    link: "https://www.risedj.club/",
  },
  {
    id: "reacirc-app",
    title: "REACirc App",
    description: `Web Platform as a Service to handle specific data flows.
System Design: Designed and developed robust system architecture, including backend services and MongoDB integration, supporting
real-time data processing and complex state management.
• Scheduling Automation: Built a flexible duty scheduling system with multi-select options, drag-and-drop management, and tier-based
schedule displays.
• Job Processing: Implemented queue-based background processing using BullMQ for efficient file handling and real-time notifications.
• Data Integration: Enhanced data accuracy by implementing address validation via Google Maps API and optimizing backend data filtering
for pagination.
Using tech stack: WebSocket, ReactJS, MUI, NodeJS, ExpressJS, MongoDB, REST API, JWT auth, Heroku, GitHub Actions workflows.`,
    getImageSrc: () => require("../images/dj-web-app.png"),
    link: "https://vimeo.com/1026656507/0eb484de83?share=copy",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      className="full-screen-section"
    >
      <Box sx={{ flexGrow: 1, width: "100%" }} className="projects-section">
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
          {projects?.map((project) => (
            <ProjectCard
              key={project?.id}
              id={project?.id}
              title={project?.title}
              description={project?.description}
              imageSrc={project?.getImageSrc()}
              link={project?.link}
            />
          ))}
        </div>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
