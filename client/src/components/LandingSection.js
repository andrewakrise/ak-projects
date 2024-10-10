import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import logo from "../ak-logo.png";

const greeting = "Hello, I am Andrew!";
const bio1 = "A Software Developer";
const bio2 = "specialized in React, Node.js, JavaScript and etc...";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={3}>
      <VStack spacing={3} alignItems="center">
        <Avatar src={logo} size="xl" name="A K" className="app-logo" />
        <Heading as="h3" size="md" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="l" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size="l" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
