import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

const Footer = () => {
  // Scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="space-between" // Adjust spacing for the button
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Pete • © 2022</p>
          <Button
            onClick={scrollToTop}
            colorScheme="purple"
            color="white"
            size="sm"
          >
            Back to Top
          </Button>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
