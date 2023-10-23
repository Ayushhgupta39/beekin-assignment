import React, { useEffect, useState } from "react";
import {
  Heading,
  Text,
  Flex,
  Divider,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const JobCard = ({
  id,
  title,
  company,
  description,
  experience,
  jobType,
  location,
  salary,
  benefits,
  applicants,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user && user.email) {
      setApplied(
        (prevApplied) => applicants.includes(user.email) || prevApplied
      );
    }
  }, [applicants]);

  const handleApply = async () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    try {
      setLoading(true);
      console.log("Applying...", user.email);
      const userEmail = user.email;
      if (userEmail) {
        axios
          .post(
            `https://beekin-job-board.onrender.com/${id}/apply`,
            { userEmail },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log("Application Submitted: ", response.data);
            setLoading(false);
            setApplied(true);
            toast({
              title: "Applied sucessfully.",
              description: "You've successfully applied for the job.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          })
          .catch((error) => {
            console.log("Error: ", error);
            toast({
              title: "Cannot apply.",
              description: "There's an error, Try later.",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          });
      } else {
        console.log("User email not found");
        setLoading(false);
        toast({
          title: "Cannot apply.",
          description: "There's an error, Try later.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(`Error while applying: ${error.message}`);
    }
  };
  return (
    <VStack
      boxShadow={"xl"}
      width={["full", "full", "30%", "30%"]}
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
        <Button
          onClick={handleApply}
          borderRadius={"full"}
          colorScheme={applied ? "green" : "telegram"}
          isLoading={loading}
          isDisabled={applied}
        >
          {applied ? `Applied` : "1-Tap-Apply"}
        </Button>

        <Button onClick={onOpen} mx={"2"} variant="ghost">
          Details
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {title}
              <Flex fontSize={"md"} textColor={"gray.500"} gap={"2"}>
                <Text>{company}, </Text>
                <Text>{location}</Text>
              </Flex>
            </ModalHeader>

            <ModalCloseButton />
            <ModalBody>
              <Divider />
              <VStack width={"full"}>
                <Flex width={"full"} justifyContent={"space-between"}>
                  <Text textColor={"gray.500"}>Pay</Text>
                  <Text>{salary}</Text>
                </Flex>
                <Flex width={"full"} justifyContent={"space-between"}>
                  <Text textColor={"gray.500"}>Benefits</Text>
                  <Text>{benefits}</Text>
                </Flex>
                <Flex width={"full"} justifyContent={"space-between"}>
                  <Text textColor={"gray.500"}>Type</Text>
                  <Text>{jobType}</Text>
                </Flex>
              </VStack>
              <Divider />
              <Box my={"4"}>{description}</Box>
              <Divider />
              <Box my={"4"}>
                <Heading size={"sm"}>EXPERIENCE</Heading>
                <Text>{experience}</Text>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose} mx={"2"} variant="ghost">
                Close
              </Button>
              <Button
                onClick={handleApply}
                borderRadius={"full"}
                colorScheme={applied ? "green" : "telegram"}
                isLoading={loading}
                isDisabled={applied}
              >
                {applied ? `Applied` : "1-Tap-Apply"}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </VStack>
  );
};

export default JobCard;
