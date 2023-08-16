import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../services/gameService";
import {
  FaWindows,
  FaLinux,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    xbox: FaXbox,
    playstation: FaPlaystation,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          color="gray.500"
          key={platform.slug}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
