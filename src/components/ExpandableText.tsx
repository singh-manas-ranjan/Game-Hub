import { Button, Text } from "@chakra-ui/react";
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
    <>
      <Text>
        {summary}
        <Button
          onClick={() => setExpanded(!expanded)}
          marginLeft="2"
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
        >
          {expanded ? "Read less" : "Read more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
