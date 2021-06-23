import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { LayoutBase } from '../../components';
import { ContentBox } from '../../components/ContentBox';


import servicesJson from '../../../fakeapi/pages/services.json';


export default function Home({data}) {
  return [
    <Head>
      <title>
        {data.title} - Serviços - Criptomaníacos
      </title>
    </Head>,
    <LayoutBase>
      <Box>
        <ContentBox>
          <Text fontSize="3xl" fontWeight="bold">{data.title}</Text>
          <Stack direction={{base: "column", md: "row-reverse"}} justify="revert" alignItems="revert">
            <Box w="100%" maxW="640px" minW="320px">
              <img src={data.image} width="100%"/>
            </Box>
            <Box>
              {data.content.map((content, index) => <Text key={index}>{content}</Text>)}
            </Box>
          </Stack>
        </ContentBox>
      </Box>
    </LayoutBase>,
  ];
}


export async function getStaticProps({params}) {
  // const res = await fetch(`http://localhost:3333/services`);
  // const services = await res.json();

  const services = servicesJson;

  const data = servicesJson.find(service => service.slug === params.slug)

  if (!services) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  // const res = await fetch(`http://localhost:3333/services`);
  // const services = await res.json();

  const services = servicesJson;

  const data = services.map(service => {return { params: { slug: service.slug } }})

  console.log(data)

  return {
    paths: data,
    fallback: true,
  }
}
