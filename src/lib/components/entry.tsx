import { Box, Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react';

interface EntryProps {
  title: string;
  children: React.ReactNode;
}

export default function EntryComponent({ children, title }: EntryProps) {
  return (
    <VStack
      w="fit-content"
      maxW="1000px"
      minW="750px"
      mx="auto"
      px={8}
      spacing={5}
    >
      <Heading as="h1" size="2xl" mt={10}>
        {title}
      </Heading>
      <Divider />
      {children}
    </VStack>
  );
}
