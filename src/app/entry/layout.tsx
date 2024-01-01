'use client';

import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Flex,
  VStack,
  Divider,
  Text,
  Icon,
  Grid,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EntryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex direction="column" w="100%" h="100%" alignItems="center">
      <HStack width="fit-content" alignItems="start">
        <VStack width="300px" position="sticky" top="0">
          <Link href="/">
            <Flex align="center" mb={4}>
              <Icon as={ArrowBackIcon} boxSize={6} mr={2} />
              <Text>back</Text>
            </Flex>
          </Link>
          <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
            <VStack>
              <Text>peer page 1</Text>
              <Text>peer page 2</Text>
              <Text>peer page 3</Text>
            </VStack>
          </motion.div>
        </VStack>
        {children}
        <Flex width="300px" h="50px"></Flex>
      </HStack>
    </Flex>
  );
}
