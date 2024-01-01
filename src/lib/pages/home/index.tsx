'use client';

import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Hero from '~/lib/components/hero';

const Home = () => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight="70vh"
        gap={4}
        mb={8}
        w="full"
      >
        <Hero />
      </Flex>
    </motion.div>
  );
};

export default Home;
