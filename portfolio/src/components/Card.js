import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      width="450px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      align="start"
      spacing={2} // Ensure consistent spacing between sections
    >
      {/* Image */}
      <Image src={imageSrc} alt={title} width="100%" borderRadius="xl" />

      {/* Content */}
      <VStack px="4" py="2" align="start" spacing={2}>
        <Heading color="black" fontSize="md">
          {title}
        </Heading>
        <Text color="gray.500" fontSize="sm">
          {description}
        </Text>
      </VStack>

      {/* Footer */}
      <HStack px="4" spacing="4" paddingTop="0" paddingBottom="3">
        <Text color="black" fontSize="xs" fontWeight="semibold">
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </HStack>
    </VStack>
  );
};

export default Card;
