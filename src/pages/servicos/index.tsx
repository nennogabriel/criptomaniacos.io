import { Box, Button, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import { LayoutBase } from '../../components';
import { ContentBox } from '../../components/ContentBox';

import servicesJson from '../../../fakeapi/pages/services.json';

const plans = [
  {
    id: 1,
    icon: '/images/icons/sardinha.svg',
    title: 'Básico',
  },
  {
    id: 2,
    icon: '/images/icons/tuba.svg',
    title: 'Premium',
  },
  {
    id: 3,
    icon: '/images/icons/baleia.svg',
    title: 'Em breve...',
  },
];

export default function Home({ services }) {
  return [
    <Head>
      <title>
        Serviços - Criptomaníacos - Bitcoin, Criptomoedas e Tecnologia
        Blockchain
      </title>
    </Head>,
    <LayoutBase>
      <Box bg="white">
        <ContentBox>
          <Text as="h1" fontSize="3xl" textAlign="center" fontWeight="light">
            Fique por dentro dos
            <Text as="strong" display="block">
              serviços oferecidos
            </Text>
          </Text>
          <Text textAlign="center">
            Uma plataforma e muitos recursos em um só lugar!
          </Text>
          <Stack direction="row" justify="flex-start" spacing={6} my={8}>
            {plans.map((plan) => (
              <Flex key={plan.id} fontSize="sm" lineHeight={1}>
                <img src={plan.icon} width="24px" />
                <Box ml={2}>
                  <Text fontWeight="light" color="gray.600">
                    Plano
                  </Text>
                  <Text fontWeight="bold">{plan.title}</Text>
                </Box>
              </Flex>
            ))}
          </Stack>
          <SimpleGrid columns={4} spacing={4}>
            {services?.map((service) => (
              <Box key={service.id} position="relative">
                <NextLink href="#">
                  <Flex
                    direction="column"
                    alignItems="center"
                    textAlign="center"
                    shadow="lg"
                    overflow="hidden"
                    borderRadius={6}
                    height="100%"
                  >
                    <img src={service.image} />
                    <Text my={8} fontWeight="bold">
                      {service.title}
                    </Text>
                    <Box flex={1}>
                      <Text>{service.headline}</Text>
                    </Box>

                    <Button
                      as="a"
                      my={8}
                      colorScheme="brand"
                      fontSize="sm"
                      px={6}
                    >
                      Ver serviço
                    </Button>
                  </Flex>
                </NextLink>
                <Flex position="absolute" top={-1} right={2}>
                  {service.plans.map((planId: number) => {
                    const { icon } = plans.find((item) => item.id === planId);
                    return <img src={icon} key={icon} width={24} />;
                  })}
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </ContentBox>
      </Box>
    </LayoutBase>,
  ];
}

export async function getStaticProps() {
  // const res = await fetch(`http://localhost:3333/services`);
  // const services = await res.json();

  const services = servicesJson;

  if (!services) {
    return {
      notFound: true,
    };
  }

  return {
    props: { services }, // will be passed to the page component as props
  };
}
