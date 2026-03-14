import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Abigail from  "../images/Abigail.jpeg";

const greeting = "Hello, I am Cynthia!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#f26d5b"
  >
    
    <VStack spacing={4} textAlign="center">
      <Avatar
        name="Abigail"
        size="2xl"
        src={Abigail}
        mb={4}
      />
      <Heading as="h1" size="2xl" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="lg" color="white">
        {bio1}
      </Heading>
      <Heading as="h3" size="md" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
