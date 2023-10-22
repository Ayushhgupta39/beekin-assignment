import React from "react";
import { Heading, Text, Flex, Divider, VStack, Button } from "@chakra-ui/react";

const JobCard = ({
  title,
  company,
  description,
  experience,
  jobType,
  location,
  salary,
  benefits,
}) => {
  return (
    <VStack
      _hover={{ cursor: "pointer" }}
      boxShadow={"lg"}
      width={"30%"}
      borderRadius={"2xl"}
    >
      <Flex flexDirection={"column"} padding={"2"}>
        <Heading size={"md"}>{title}</Heading>
        <Flex textColor={"gray.500"} gap={"2"}>
          <Text>{company}, </Text>
          <Text>{location}</Text>
        </Flex>
      </Flex>
      <Divider />
      <VStack width={"full"}>
        <Flex width={"75%"} justifyContent={"space-between"}>
          <Text textColor={"gray.500"}>Pay</Text>
          <Text>{salary}</Text>
        </Flex>
        <Flex width={"75%"} justifyContent={"space-between"}>
          <Text textColor={"gray.500"}>Benefits</Text>
          <Text>{benefits.slice(0, 20)}...</Text>
        </Flex>
        <Flex width={"75%"} justifyContent={"space-between"}>
          <Text textColor={"gray.500"}>Type</Text>
          <Text>{jobType}</Text>
        </Flex>
      </VStack>
      <Divider />
      <Flex padding={"2"} mx={"10"}>
        {description.slice(0, 100)}...
      </Flex>
      <Divider />
      <Flex padding={"2"} flexDirection={"row-reverse"} width={"full"}>
        <Button borderRadius={"full"} colorScheme="telegram">1-Tap Apply</Button>
      </Flex>
    </VStack>
  );
};

export default JobCard;
