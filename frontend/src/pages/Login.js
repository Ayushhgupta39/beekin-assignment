import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();

  function signInWithGoogle() {
    try {
      signInWithPopup(auth, googleProvider).then((data) => {
        localStorage.setItem("userInfo", JSON.stringify(data.user));
        console.log(data.user);
        navigate("/jobs");
      });
    } catch (error) {
      console.log(`Error while logging In: ${error}`);
    }
  }
  return (
    <Box
      display={"flex"}
      width={"full"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      background={"linear-gradient(135deg, #FFFFFF, #AC93CE)"}
      flexDirection={"column"}
      gap={"4"}
    >
      <Flex gap={["2", "2", "4", "4"]}>
        <Heading textColor={"purple.900"} size={["2xl", "2xl", "4xl", "4xl"]}>
          Beekin
        </Heading>{" "}
        <Heading size={["2xl", "2xl", "4xl", "4xl"]}>Job Portal</Heading>
      </Flex>
      <Box width={["full", "full", "50%", "50%"]}>
        <Text fontSize={["large", "large", "xl", "xl"]} textColor={"gray.600"} fontWeight={"medium"} textAlign={"center"}>
          An intuitive online platform that seamlessly connects
          job seekers with prospective employers. It simplifies the job search
          and application process, fostering efficient and effective hiring
          experiences for both job seekers and employers.
        </Text>
      </Box>
      <Button leftIcon={<FcGoogle />} onClick={signInWithGoogle}>
        Sign in with Google
      </Button>
    </Box>
  );
};

export default Login;
