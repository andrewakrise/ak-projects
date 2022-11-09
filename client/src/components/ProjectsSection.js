import React from "react";
import FullScreenSection from "./FullScreenSection";
import { WrapItem, Heading, Wrap, Center } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    id: 1,
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/music-device-store.png"),
  },
  {
    id: 2,
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/childwood-store.png"),
  },
  {
    id: 3,
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/slidys.png"),
  },
  {
    id: 4,
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/events-scheduler.png"),
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
      min-width="100%"
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Wrap
        justify='center'
        spacing='8'
      >
        {projects.map((project) => (
          <WrapItem key={project.id} maxW='400px' maxH='600px'>
            <Center key={project.id}>
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                url="https://github.com/rgommezz/react-native-offline"
                imageSrc={project.getImageSrc()}
              />
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </FullScreenSection>
  );
};

export default ProjectsSection;