import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 115 ? "green" : score > 80 ? "yellow" : "";
  return (
    <Badge colorScheme={color} borderRadius="4px" paddingX={2} fontSize="14px">
      {score}
    </Badge>
  );
};

export default CriticScore;
