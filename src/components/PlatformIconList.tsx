import { Platform } from "./hooks/Gamehook";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    nintendo: SiNintendo,
    linux: FaLinux,
    andriod: FaAndroid,
    web: BsGlobe,
    ios: MdPhoneIphone,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={IconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
