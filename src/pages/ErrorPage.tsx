import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box
        display="grid"
        justifyContent="center"
        textAlign="center"
        marginY="40"
      >
        <Heading>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "404 This Page Does Not Exist."
            : "Something Went Wrong."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
