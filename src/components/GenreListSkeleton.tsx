import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List paddingBlock={5}>
      <ListItem>
        <HStack>
          <Skeleton boxSize={9} borderRadius={6} />
          <SkeletonText width="100%" />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
