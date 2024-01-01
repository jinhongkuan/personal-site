'use client';

import { Button, Flex, Grid, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero({}) {
  const [show, setShow] = React.useState(false);
  return (
    <Flex>
      <Stack direction="column" spacing={4}>
        <TypeAnimation
          sequence={[
            'Welcome! I am Jin, and these are my personal quests.',
            () => setShow(true),
          ]}
          style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
        />
        {
          <Stack
            direction={'row'}
            visibility={show ? 'visible' : 'hidden'}
            justifyContent="right"
          >
            <Button>Let&apos;s hear it</Button>
            <Link href="/entry/thoughts/2024-quests">
              <Button>Quests?</Button>
            </Link>
          </Stack>
        }
      </Stack>
    </Flex>
  );
}
