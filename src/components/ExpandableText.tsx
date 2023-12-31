import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const limit = 350;
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= limit)
    return (
      <>
        <Text>{children}</Text>
      </>
    );

  const summary = expanded ? children : children.substring(0, limit) + ".... ";
  return (
    <Box marginTop={5}>
      <Heading size={"lg"}>About</Heading>
      <Text>
        {summary}
        <Button
          onClick={() => setExpanded(!expanded)}
          display="block"
          marginTop="1"
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
        >
          {expanded ? "Read less" : "Read more"}
        </Button>
      </Text>
    </Box>
  );
};

export default ExpandableText;
