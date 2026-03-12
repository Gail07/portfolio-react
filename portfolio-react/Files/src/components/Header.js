import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    label: "Email me",
  },
  {
    icon: faGithub,
    url: "https://github.com",
    label: "Github",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    label: "Medium",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    label: "Stack Overflow",
  },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const prevScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < prevScrollY.current) {
        // Scrolling up
        setShowHeader(true);
      } else if (currentScrollY > prevScrollY.current) {
        // Scrolling down
        setShowHeader(false);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      style={{
        transform: showHeader ? "translateY(0)" : "translateY(-200px)",
        transitionProperty: "transform",
        transitionDuration: ".3s",
        transitionTimingFunction: "ease-in-out",
        backgroundColor: "#282c37",
      }}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  style={{ color: "white" }}
                  onClick={(e) => {
                    if (social.label === "Email me") {
                      e.preventDefault();
                      window.location.href = social.url;
                    }
                  }}
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects-section" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>
                Contact me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

function handleClick(anchor) {
  return (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
}

export default Header;
