import {
  CardBody,
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <List>
      <ListItem marginY={8}>
        <HStack>
          {/* Skeleton for the image */}
          <Skeleton height="32px" width="32px" />

          {/* Skeleton for the text overlay */}

          <SkeletonText width="100px" />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreSkeleton;
