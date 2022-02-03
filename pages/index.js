import {
  Heading,
  Flex,
  VStack,
  HStack,
  Icon,
  Text,
  Link,
  Avatar,
} from "@chakra-ui/react";

import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <VStack align="center" gap="32px" justify="center">
      <Avatar src="/profile.png" size="2xl" />
      <VStack>
        <Heading as="h1">Nazmuz Pranto</Heading>
        <Heading size="md" as="h3">
          Front End Engineer
        </Heading>
      </VStack>
      <Text textAlign="center">
        👋 Hello! I&apos;m Shakib, a Front End Engineer, love building
        application on the web w/ React and its eco-system.
      </Text>
      <HStack spacing="20px" justifySelf="center">
        <Link href="https://twitter.com/nazmuzpranto" target="_blank">
          <Icon color="blue.200" as={FaTwitter} />
        </Link>
        <Link href="https://github.com/npranto" target="_blank">
          <Icon color="black" as={FaGithub} />
        </Link>
      </HStack>
    </VStack>
  );
}
