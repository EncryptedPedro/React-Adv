import React from "react";
import { Avatar, Heading, VStack, defineStyle } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "green",
  outlineOffset: "2px",
  outlineStyle: "solid",
})

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack gap="4" textAlign="center">
      <Avatar 
        shape="circle"
        src="https://i.pravatar.cc/"
        size="xl"
        css={ringCss}
      />
      <Heading size="md" textAlign="center">
        {greeting}
      </Heading>
      <Heading size="xl" textAlign="center">
        {bio1}
        <br/>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
