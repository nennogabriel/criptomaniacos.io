import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import NextLink from 'next/link';
import { LayoutBase } from '../components';
import { ContentBox } from '../components/ContentBox';
import { SocialIconLink } from '../components/SocialIconLink';
import { FaqCollapsable } from '../components/FaqCollapsable';

const aboutCards = [
  {
    id: 'aboutCards-1',
    image: '/images/pages/about_savings.svg',
    title: 'Pare de perder dinheiro',
    text: 'Entenda como o mercado funciona e aprenda estratégias assertivas para otimizar a gestão de risco dos seus investimentos.',
  },
  {
    id: 'aboutCards-2',
    image: '/images/pages/about_bussula.svg',
    title: 'Saiba sempre como reagir',
    text: 'Em um mercado volátil, que funciona 24/7, é essencial que você esteja preparado para tomar decisões sobre qual caminho seguir.',
  },
  {
    id: 'aboutCards-3',
    image: '/images/pages/about_learn.svg',
    title: 'Aprenda com especialistas',
    text: 'Tenha acesso a uma equipe com vasta experiência no mercado de criptomoedas, te dando suporte e assessoria contínua.',
  },
  {
    id: 'aboutCards-4',
    image: '/images/pages/about_flight.svg',
    title: 'Conquiste a liberdade financeira',
    text: 'Não fique fora desta revolução, seja uma das milhares de pessoas impactadas todos os meses por nossos produtos e serviços.    ',
  },
];

const serviceCards = [
  {
    id: 'serviceCards-1',
    image: '/images/pages/service_sinais.svg',
    title: 'Sinais para Trade',
    text: 'Saiba qual moeda comprar e a que preço vender! Day Trade nos pares BTC e USD.',
  },
  {
    id: 'serviceCards-2',
    image: '/images/pages/service_analise.svg',
    title: 'Análises Gráficas',
    text: 'Fique bem informado ao receber diariamente Análises Gráficas, em vídeo, das principais criptomoedas, além da justificativa para os Sinais que enviamos.',
  },
  {
    id: 'serviceCards-3',
    image: '/images/pages/service_tutoriais.svg',
    title: 'Tutoriais',
    text: 'Dúvidas? Com os Tutoriais você recebe o passo-a-passo, em texto e vídeo, para fazer qualquer coisa: Carteiras, Exchanges, Trade, etc.',
  },
  {
    id: 'serviceCards-4',
    image: '/images/pages/service_grupo_vip.svg',
    title: 'Grupo VIP',
    text: 'Tire suas dúvidas junto a Traders e Analistas experientes.',
  },
  {
    id: 'serviceCards-5',
    image: '/images/pages/service_robo.svg',
    title: 'Robô de Estratégias e Sinais',
    text: 'Escolha diferentes Estratégias de trading automatizadas conforme o nível de risco que está disposto a tomar.',
  },
  {
    id: 'serviceCards-6',
    image: '/images/pages/service_analise_prj.svg',
    title: 'Análises de Moedas/Projetos',
    text: 'Material completo sobre as principais criptomoedas do mercado: Times, Tecnologia, Cronograma, Potencial de valorização, etc.',
  },
];

const plansCards = [
  {
    id: 'plansCards-1',
    title: 'Básico',
    image: '/images/pages/plan_basic.svg',
    highlight: '',
  },
  {
    id: 'plansCards-2',
    title: 'Premium',
    image: '/images/pages/plan_basic.svg',
    highlight: 'Mais popular',
  },
  {
    id: 'plansCards-3',
    title: 'Em breve...',
    image: '/images/pages/plan_soon.svg',
    highlight: '',
  },
];

const blogCards = [
  {
    id: 'blogCards-1',
    title: 'title do post para colocar',
    image: '/images/blog/post_thumb.jpeg',
    text: 'text text text',
  },
  {
    id: 'blogCards-2',
    title: 'title do post para colocar',
    image: '/images/blog/post_thumb.jpeg',
    text: 'text text text',
  },
  {
    id: 'blogCards-3',
    title: 'title do post para colocar',
    image: '/images/blog/post_thumb.jpeg',
    text: 'text text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text text',
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
          <SimpleGrid columns={{ base: 1, md: 2 }}>
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

      <Box
        bg="url(/images/fundo-planos-100.jpeg) no-repeat center"
        bgSize="cover"
        color="white"
      >
        <ContentBox>
          <Text textAlign="center" fontWeight="bold" fontSize="3xl">
            Temos os melhores planos <br /> para você e para o seu bolso!
          </Text>
          <Flex
            justify="space-around"
            alignItems="center"
            mt={24}
            direction={{ base: 'column', md: 'row' }}
          >
            {plansCards.map((card) => (
              <Flex
                key={card.id}
                direction="column"
                width={{ base: '90%', md: '25%' }}
                textAlign="center"
                justify="center"
                alignItems="center"
                bg="white"
                color="black"
                borderRadius="8px"
                p={6}
                border={card.highlight ? '2px solid' : ''}
                borderColor="brand.500"
                position="relative"
                transform={card.highlight ? 'translateY(-16px)' : ''}
                mt={{ base: card.highlight ? '80px' : '12px', md: '0' }}
              >
                {!!card.highlight && (
                  <Text
                    position="absolute"
                    bg="brand.500"
                    top="-40px"
                    py={2}
                    px={4}
                    color="white"
                    borderTopRadius={4}
                  >
                    {card.highlight}
                  </Text>
                )}
                <Text fontWeight="bold" fontSize="3xl">
                  {card.title}
                </Text>
                <Box width="100%">
                  <img src={card.image} />
                </Box>
              </Flex>
            ))}
          </Flex>
          <Flex
            textAlign="center"
            justify="space-around"
            mt={8}
            mx="auto"
            width="80%"
            direction={{ base: 'column', md: 'row' }}
          >
            <Box width={{ base: '90%', md: '35%' }}>
              <Text fontWeight="bold" fontSize="5xl">
                +200.000
              </Text>
              <Text textTransform="uppercase" fontSize="2xl" fontWeight="300">
                Pessoas
              </Text>
              <Text>Impactadas todos os meses em nossas redes sociais</Text>
            </Box>
            <Box width={{ base: '90%', md: '35%' }}>
              <Text fontWeight="bold" fontSize="5xl">
                +8.000
              </Text>
              <Text textTransform="uppercase" fontSize="2xl" fontWeight="300">
                Clientes
              </Text>
              <Text>
                Satisfeitos com o que aprenderam e evoluíram conosco em 2020.
              </Text>
            </Box>
          </Flex>
          <Center>
            <NextLink href="#planos">
              <Button as="a" colorScheme="brand" mt={8}>
                Conheça os planos
              </Button>
            </NextLink>
          </Center>
        </ContentBox>
      </Box>

      <Box>
        <ContentBox>
          <Text textAlign="center" fontWeight="bold" fontSize="3xl">
            Performance mensal das Estratégias
          </Text>
          <Text textAlign="center">
            Acompanhe o resultado líquido das nossas Estratégias de Trading no
            mês de Novembro. Serviço exclusivo para clientes PREMIUM.
          </Text>
          <Table variant="display" my={8}>
            <Thead>
              <Tr>
                <Th>Nível de risco</Th>
                <Th>Estratégia</Th>
                <Th>Resultado</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Conservador</Td>
                <Td>Resiliente</Td>
                <Td>+0,42%</Td>
              </Tr>
              <Tr>
                <Td>Moderado</Td>
                <Td>Cauteloso</Td>
                <Td>+6,81%</Td>
              </Tr>
              <Tr>
                <Td>Arrojado</Td>
                <Td>Sistemático</Td>
                <Td>+3,99%</Td>
              </Tr>
            </Tbody>
          </Table>
        </ContentBox>
      </Box>

      <Box bg="gray.100">
        <ContentBox>
          <Text fontWeight="semibold" textAlign="center" fontSize="3xl" my={8}>
            Criptomaníacos na Mídia
          </Text>
          <Stack direction="row" spacing={4}>
            <Link
              isExternal
              href="https://cointelegraph.com.br/news/experts-indicate-the-top-five-channels-on-the-market-about-bitcoin"
            >
              <img src="/images/partners/cointelegraph.png" />
            </Link>
            <Link
              isExternal
              href="https://www.criptofacil.com/canal-criptomaniacos-e-destaque-em-tecnologia-em-premio-de-influenciadores-digitais/"
            >
              <img src="/images/partners/criptofacil.png" />
            </Link>
            <Link
              isExternal
              href="https://livecoins.com.br/canal-criptomaniacos-anuncia-plataforma-completa-de-conteudo-sobre-criptoativos/"
            >
              <img src="/images/partners/livecoins.png" />
            </Link>
            <Link
              isExternal
              href="https://cointimes.com.br/top-canais-de-criptomoedas-para-voce-seguir/"
            >
              <img src="/images/partners/cointimes.png" />
            </Link>
            <Link
              isExternal
              href="https://criptonizando.com/2020/04/20/plataforma-anuncia-curso-gratuito-para-quem-quer-se-tornar-trader-de-bitcoin/"
            >
              <img src="/images/partners/criptonizando.png" />
            </Link>
          </Stack>
        </ContentBox>
      </Box>

      <Box>
        <ContentBox textAlign="center">
          <Text fontSize="3xl" fontWeight="semibold">
            Acompanhe as novidades das <br /> criptomoedas em nosso blog
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {blogCards.map((card) => (
              <Stack
                direction="column"
                key={card.id}
                textAlign="center"
                p={4}
                boxShadow="md"
                borderRadius="md"
              >
                <Text fontSize="xl">{card.title}</Text>
                <img src={card.image} />
                <Text flex="1">{card.text}</Text>
                <NextLink href="#blog">
                  <Button as="a" colorScheme="brand">
                    Ler publicação
                  </Button>
                </NextLink>
              </Stack>
            ))}
          </SimpleGrid>
          <NextLink href="#blog">
            <Button as="a" colorScheme="brand" mt={12} mb={4}>
              Leia outras publicações
            </Button>
          </NextLink>
        </ContentBox>
      </Box>

      <Box bg="gray.100">
        <ContentBox textAlign="center">
          <Text fontSize="3xl" fontWeight="semibold">
            Nos siga também nas redes sociais
          </Text>
          <Flex
            justify="space-around"
            width={{ base: '100%', md: '70%' }}
            mx="auto"
            my={8}
          >
            <SocialIconLink name="facebook" size={80} />
            <SocialIconLink name="twitter" size={80} />
            <SocialIconLink name="youtube" size={80} />
            <SocialIconLink name="telegram" size={80} />
            <SocialIconLink name="instagram" size={80} />
          </Flex>
        </ContentBox>
      </Box>

      <Box>
        <ContentBox>
          <FaqCollapsable />
        </ContentBox>
      </Box>
    </LayoutBase>,
  ];
}
