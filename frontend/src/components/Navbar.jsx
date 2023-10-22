import { Avatar, Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
    <Box
      display={"flex"}
      width={"full"}
      justifyContent={"space-between"}
      p={"2"}
    >
      <Box fontSize={"2xl"} fontWeight={"Bolder"}>
        <p>Beekin Jobs</p>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={"2"}>
        <Avatar name={user?.displayName} src={user?.photoURL} />
        <Button
          colorScheme="messenger"
          leftIcon={<BiLogOutCircle fontSize={"larger"} />}
          fontWeight={"bold"}
          onClick={logout}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
