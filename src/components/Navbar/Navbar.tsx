import { auth } from "@/firebase/clientApp";
import { Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./RightContent/RightContent";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex bg="white" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/logo.svg" height="30px" alt="logo face" />
        <Image
          src="/images/logo-texte.svg"
          height="46px"
          alt="logo text"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <Spacer />
      <RightContent user={user} />
    </Flex>
  );
};

export default Navbar;
