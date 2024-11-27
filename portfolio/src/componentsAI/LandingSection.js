import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={6}>
      <Avatar 
        size="2xl" 
        name="Pete"
        src="https://i.pravatar.cc/300"
      />
      <Heading 
        as="h1"
        size="xl"
        noOfLines={1}
      >
        {greeting}
      </Heading>
      <VStack spacing={2}>
        <Heading
          as="h2"
          size="md"
          noOfLines={1}
        >
          {bio1}
        </Heading>
        <Heading
          as="h2"
          size="md"
          noOfLines={1}
        >
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

