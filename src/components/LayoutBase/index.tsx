import { Box, Flex } from '@chakra-ui/react';

import { HeaderBase } from './HeaderBase';
import { FooterBase } from './FooterBase';
import React from 'react';

export function LayoutBase({ children }) {
  return (
    <Flex
      direction="column"
      maxW="1920px"
      h="100%"
      sx={{ margin: '0 auto' }}
      background="#eeeeee"
      position="relative"
    >
      <HeaderBase />
      <Box as="section" flex={1}>
        {children}
      </Box>
      <FooterBase />
    </Flex>
  );
}
