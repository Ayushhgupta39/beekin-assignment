import { Box, Button } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";

const Login = () => {
  const navigate = useNavigate();

  function signInWithGoogle() {
    try {
      signInWithPopup(auth, googleProvider).then((data) => {
        localStorage.setItem("userInfo", JSON.stringify(data.user))
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
    >
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </Box>
  );
};

export default Login;
