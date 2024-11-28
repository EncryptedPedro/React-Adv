import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const headerRef = useRef(null); // Reference to the header element
  const lastScrollY = useRef(0); // Track the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (headerRef.current) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
          // Scrolling down, hide the header
          headerRef.current.style.transform = "translateY(-100%)";
        } else {
          // Scrolling up, show the header
          headerRef.current.style.transform = "translateY(0)";
        }
      }

      // Update lastScrollY to the current position
      lastScrollY.current = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
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
              {socials.map((link, index) => (
                <Link key={index} href={link.url} isExternal>
                  <Box>
                    <FontAwesomeIcon icon={link.icon} size="lg"/>
                  </Box>
                </Link>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link key="Contact Me" onClick={handleClick("contactme")}>
                <Box fontSize={"4x1"}>
                  Contact Me
                </Box>
              </Link>
              <Link key="Projects" onClick={handleClick("projects")}>
                <Box fontSize={"4x1"}>
                  Projects
                </Box>
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
