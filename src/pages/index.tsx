import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import NextLink from 'next/link';
import { LayoutBase } from '../components';
import { ContentBox } from '../components/ContentBox';

const aboutCards = [
  {
    id: '1',
    image: '/images/pages/about_savings.svg',
    title: 'Pare de perder dinheiro',
    text: 'Entenda como o mercado funciona e aprenda estratégias assertivas para otimizar a gestão de risco dos seus investimentos.',
  },
  {
    id: '2',
    image: '/images/pages/about_bussula.svg',
    title: 'Saiba sempre como reagir',
    text: 'Em um mercado volátil, que funciona 24/7, é essencial que você esteja preparado para tomar decisões sobre qual caminho seguir.',
  },
  {
    id: '3',
    image: '/images/pages/about_learn.svg',
    title: 'Aprenda com especialistas',
    text: 'Tenha acesso a uma equipe com vasta experiência no mercado de criptomoedas, te dando suporte e assessoria contínua.',
  },
  {
    id: '4',
    image: '/images/pages/about_flight.svg',
    title: 'Conquiste a liberdade financeira',
    text: 'Não fique fora desta revolução, seja uma das milhares de pessoas impactadas todos os meses por nossos produtos e serviços.    ',
  },
];

const serviceCards = [
  {
    id: 1,
    image: '/images/pages/service_sinais.svg',
    title: 'Sinais para Trade',
    text: 'Saiba qual moeda comprar e a que preço vender! Day Trade nos pares BTC e USD.',
  },
  {
    id: 2,
    image: '/images/pages/service_analise.svg',
    title: 'Análises Gráficas',
    text: 'Fique bem informado ao receber diariamente Análises Gráficas, em vídeo, das principais criptomoedas, além da justificativa para os Sinais que enviamos.',
  },
  {
    id: 3,
    image: '/images/pages/service_tutoriais.svg',
    title: 'Tutoriais',
    text: 'Dúvidas? Com os Tutoriais você recebe o passo-a-passo, em texto e vídeo, para fazer qualquer coisa: Carteiras, Exchanges, Trade, etc.',
  },
  {
    id: 4,
    image: '/images/pages/service_grupo_vip.svg',
    title: 'Grupo VIP',
    text: 'Tire suas dúvidas junto a Traders e Analistas experientes.',
  },
  {
    id: 5,
    image: '/images/pages/service_robo.svg',
    title: 'Robô de Estratégias e Sinais',
    text: 'Escolha diferentes Estratégias de trading automatizadas conforme o nível de risco que está disposto a tomar.',
  },
  {
    id: 6,
    image: '/images/pages/service_analise_prj.svg',
    title: 'Análises de Moedas/Projetos',
    text: 'Material completo sobre as principais criptomoedas do mercado: Times, Tecnologia, Cronograma, Potencial de valorização, etc.',
  },
];

export default function Home() {
  return [
    <Head>
      <title>
        Criptomaníacos - Bitcoin, Criptomoedas e Tecnologia Blockchain
      </title>
    </Head>,
    <LayoutBase>
      <Box
        bg="url(/images/banner.svg) no-repeat center"
        bgSize="cover"
        color="white"
        h={{ base: '540px', md: '100vh' }}
      >
        <ContentBox h="100%">
          <Flex
            maxW={{ base: 360, md: 640 }}
            direction="column"
            justify="center"
            alignItems="start"
            h="100%"
          >
            <Text textTransform="uppercase">
              Tudo sobre bitcoin e criptomoedas
            </Text>
            <Text
              fontSize={48}
              lineHeight="2.8rem"
              my={8}
              fontWeight="semibold"
            >
              Mergulhe no mundo das moedas digitais!
            </Text>
            <Text textTransform="uppercase">
              Somos uma plataforma de educação financeira voltada à ativos
              digitais. Diversos serviços para você investir melhor.
            </Text>
            <Button mt={8} colorScheme="green">
              Assine agora
            </Button>
          </Flex>
        </ContentBox>
      </Box>

      <Box bg="white">
        <ContentBox>
          <Text
            fontSize="3xl"
            maxW="640px"
            textAlign="center"
            mx="auto"
            fontWeight="semibold"
            mb={12}
          >
            A plataforma de educação financeira mais completa do mercado de
            criptomoedas!
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={10}
            textAlign="center"
          >
            {aboutCards.map((card) => (
              <Box key={card.id}>
                <Box maxW={250} mx="auto">
                  <img src={card.image} width="100%" />
                </Box>
                <Text fontWeight="bold" textTransform="uppercase" my={6}>
                  {card.title}
                </Text>
                <Text>{card.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </ContentBox>
      </Box>

      <Box>
        <ContentBox textAlign="center">
          <Text fontSize={32} fontWeight="semibold" my={8}>
            Entenda como funciona
          </Text>
          <Text mb={8}>
            Veja o vídeo explicativo da nossa plataforma educacional e dê o
            primeiro passo rumo à sua liberdade financeira.
          </Text>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/IXs7bsDzWTw"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </AspectRatio>
          <NextLink href="#planos">
            <Button as="a" colorScheme="brand" mt={8}>
              Conheça os planos de assinatura
            </Button>
          </NextLink>
        </ContentBox>
      </Box>

      <Box>
        <ContentBox>
          <Text textAlign="center" fontWeight="semibold" fontSize={32}>
            Serviços que atendem do <br /> iniciante ao experiente
          </Text>
          <SimpleGrid columns={{ base: 1, lg: 2 }}>
            {serviceCards.map((card) => (
              <Flex key={card.id} alignItems="flex-start" my={10}>
                <img src={card.image} width="100px" height="auto" />
                <Box>
                  <Text fontWeight="semibold" mb={4}>
                    {card.title}
                  </Text>
                  <Text color="gray.500">{card.text}</Text>
                </Box>
              </Flex>
            ))}
          </SimpleGrid>
          <Center>
            <NextLink href="#planos">
              <Button as="a" colorScheme="brand" mt={8}>
                Conheça os planos de assinatura
              </Button>
            </NextLink>
          </Center>
        </ContentBox>
      </Box>
    </LayoutBase>,
  ];
}
