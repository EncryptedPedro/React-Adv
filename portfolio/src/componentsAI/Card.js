import { Heading, HStack, Image, Text, VStack, Card as ChakraCard, CardBody } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <ChakraCard 
      maxW='sm'
      borderRadius="xl"
      backgroundColor="white"
      cursor="pointer"
      _hover={{
        transform: "scale(1.02)",
        transition: "all 0.2s ease-in-out"
      }}
    >
      <Image
        src={imageSrc}
        alt={title}
        borderTopRadius="xl"
        objectFit="cover"
      />
      <CardBody>
        <VStack align="start" spacing={4}>
          <Heading size="md" color="black">
            {title}
          </Heading>
          <Text color="gray.600">
            {description}
          </Text>
          <HStack spacing={2} color="black">
            <Text fontWeight="medium">Learn More</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </CardBody>
    </ChakraCard>
  );
};

export default Card;

