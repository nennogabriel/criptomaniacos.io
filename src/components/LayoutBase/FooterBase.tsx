import NextLink from 'next/link';
import {
  Box,
  Button,
  Center,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { SocialIconLink } from '../SocialIconLink';

export function FooterBase() {
  return (
    <Flex
      bg="blue.800"
      color="white"
      py={{ base: 4, xl: 8 }}
      px={{ base: 4, xl: 12 }}
      direction="column"
    >
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
        <Box>
          <img src="/images/logo-rodape.svg" width="90%" />
        </Box>
        <Stack direction="row" spacing={10} fontSize="xl">
          <Stack spacing={6}>
            <NextLink href="#servicos">
              <Link>Serviços</Link>
            </NextLink>
            <NextLink href="#">
              <Link>Planos</Link>
            </NextLink>
            <NextLink href="#">
              <Link>Loja</Link>
            </NextLink>
            <NextLink href="#">
              <Link>Blog</Link>
            </NextLink>
            <NextLink href="#">
              <Link>Nosso canal no Youtube</Link>
            </NextLink>
          </Stack>
          <Stack spacing={6}>
            <NextLink href="#servicos">
              <Link>Serviços</Link>
            </NextLink>
            <NextLink href="#">
              <Link>Planos</Link>
            </NextLink>
            <NextLink href="#">
              <Link>Loja</Link>
            </NextLink>
            <NextLink href="#">
              <Link>Blog</Link>
            </NextLink>
            <NextLink href="#">
              <Link>Nosso canal no Youtube</Link>
            </NextLink>
          </Stack>
        </Stack>
        <Stack>
          <Stack direction="row" justifyContent="center">
            <NextLink href="#">
              <Button as={Link} colorScheme="green">
                Assinar
              </Button>
            </NextLink>
            <NextLink href="#">
              <Button as={Link} colorScheme="green" variant="outline">
                Entrar
              </Button>
            </NextLink>
          </Stack>
          <Box py={8}>
            <Text align="center" py={4} fontSize="xl">
              Nos acompanhe nas redes:
            </Text>
            <Flex justify="space-between">
              <SocialIconLink name="facebook" size={54} />
              <SocialIconLink name="twitter" size={54} />
              <SocialIconLink name="youtube" size={54} />
              <SocialIconLink name="telegram" size={54} />
              <SocialIconLink name="instagram" size={54} />
            </Flex>
          </Box>
        </Stack>
      </SimpleGrid>
      <Flex
        justify={{ base: 'center', lg: 'start' }}
        direction={{ base: 'column', lg: 'row' }}
        align="center"
        fontSize="xl"
      >
        <img src="/images/icons/email.svg" width={54} height={54} />
        <Box textAlign={{ base: 'center', lg: 'left' }} ml={{ base: 0, lg: 8 }}>
          <Text mt={4}>Entre em contato!</Text>
          <Text fontSize="3xl" color="green.500">
            contato@criptomaniacos.io
          </Text>
        </Box>
      </Flex>
      <Box as="hr" py={2} mt={12} />
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        textAlign="center"
        justify="space-between"
      >
        <Text>Copyright 2020 © Criptomaníacos</Text>
        <Box textAlign={{ base: 'center', lg: 'right' }}>
          <Text>Layout por: Criptomaníacos</Text>
          <Text>Desenvolvido por: Criptomaníacos</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
