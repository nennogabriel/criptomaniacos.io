import React from 'react';
import NextLink from 'next/link';
import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Spacer,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { SocialIconLink } from '../SocialIconLink';

const menuLinks = [
  { label: 'Contato', link: '#contato' },
  { label: 'Serviços', link: '#Serviços' },
  { label: 'Planos', link: '#Planos' },
  { label: 'Loja', link: '#Loja' },
  { label: 'Blog', link: '#Blog' },
  { label: 'Sobre', link: '#Sobre' },
  { label: 'Dúvidas', link: '#dúvidas' },
];

const menuButtons = [
  {
    label: 'Assinar',
    link: '#assinar',
    variant: 'solid',
  },
  {
    label: 'Entrar',
    link: '#entrar',
    variant: 'outline',
  },
];

export function HeaderBase() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Flex
        py={{ base: 4, xl: 8 }}
        px={{ base: 4, xl: 12 }}
        align="center"
        position="absolute"
        top={0}
        left={0}
        right={0}
        color="white"
      >
        <Button
          ref={btnRef}
          onClick={onOpen}
          variant=""
          display={{ lg: 'none' }}
        >
          <img width="24px" height="100%" src="/images/icons/menu.svg" />
        </Button>

        <Spacer display={{ lg: 'none' }} />

        <NextLink href="/">
          <Button as="a" variant="link">
            <img width="200px" height="100%" src="/images/logo-topo.svg" />
          </Button>
        </NextLink>
        <Flex as="nav" align="center" grow={1} ml={8}>
          <Stack
            direction={['row']}
            spacing={8}
            display={{ base: 'none', lg: 'block' }}
          >
            {menuLinks.map((link) => (
              <NextLink href={link.link} key={link.label}>
                <Link>{link.label}</Link>
              </NextLink>
            ))}
          </Stack>
          <Spacer />
          <Stack
            direction={['row']}
            spacing={6}
            display={{ base: 'none', lg: 'block' }}
          >
            {menuButtons.map((btn) => (
              <NextLink href={btn.link} key={btn.label}>
                <Button
                  as="a"
                  variant={btn.variant}
                  colorScheme="brand"
                  fontSize={14}
                  h={1}
                  py={3}
                  px={5}
                >
                  {btn.label}
                </Button>
              </NextLink>
            ))}
          </Stack>
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="blue.800" p={4}>
          <DrawerCloseButton color="green.500" />
          <DrawerHeader>
            <Center>
              <img src="/images/simbolo-logo.svg" width="64px" height="76px" />
            </Center>
          </DrawerHeader>

          <DrawerBody py={4}>
            <Stack color="white" textAlign="center" spacing={6} py={4}>
              {menuLinks.map((link) => (
                <NextLink href={link.link} key={link.label}>
                  <Link>{link.label}</Link>
                </NextLink>
              ))}
            </Stack>
            <Stack textAlign="center" spacing={6} py={4}>
              {menuButtons.map((btn) => (
                <NextLink href={btn.link} key={btn.label}>
                  <Button as="a" variant={btn.variant} colorScheme="brand">
                    {btn.label}
                  </Button>
                </NextLink>
              ))}
            </Stack>
            <Stack direction="row" justify="center" spacing={4}>
              <SocialIconLink name="youtube" size={54} />
              <SocialIconLink name="instagram" size={54} />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
