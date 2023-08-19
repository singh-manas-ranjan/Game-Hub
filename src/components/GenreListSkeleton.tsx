import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import GenreListImageContainer from "./GenreListImageContainer";
import GenreListItemContainer from "./GenreListItemContainer";

const GenreListSkeleton = () => {
  return (
    <List>
      <GenreListItemContainer>
        <ListItem>
          <HStack>
            <GenreListImageContainer>
              <Skeleton height="100%" />
            </GenreListImageContainer>
            <SkeletonText width="100%" />
          </HStack>
        </ListItem>
      </GenreListItemContainer>
    </List>
  );
};

export default GenreListSkeleton;
