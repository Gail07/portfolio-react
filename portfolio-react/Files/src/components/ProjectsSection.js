import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Restaurant Management website",
    description:
      "A web application for a restaurant to manage their menu and orders",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "A web application for veterinary clinics",
    description:
      "A web application for veterinary clinics to manage their patients and appointments",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "A hotel website",
    description: "A website for an hotel to showcase their rooms and services",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "A travel agency website",
    description:
      "A web application for an travel agency to manage their events and bookings",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#f6ea8c"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
