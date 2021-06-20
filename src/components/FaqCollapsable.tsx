import { Text, Box, Flex, Button } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';

const faqCards = [
  {
    id: 1,
    question: 'É possível assinar com cartão de débito, boleto, ou TED?',
    answer:
      'Por enquanto é possível assinar apenas com cartão de crédito ou criptomoedas.',
  },
  {
    id: 2,
    question:
      'Fiz um pagamento com criptomoeda mas ainda não liberou, o que faço?',
    answer:
      'Verifique no block explorer da moeda correspondente se a transação está confirmada na rede, caso esteja e ainda não tenha sido liberado, siga os passos abaixo: Os pagamentos com criptomoeda são intermediados por uma empresa externa, portanto para resolver é preciso entrar em contato com ela. Envie um e-mail para suporte@kamoney.com.br fornecendo o máximo possível de detalhes que o problema será solucionado. Se restar alguma dúvida, basta entrar em contato com o nosso suporte.',
  },
  {
    id: 3,
    question:
      'Estou sendo cobrado duplamente em meu cartão de crédito, o que fazer?',
    answer:
      'Neste caso é preciso entrar em contato conosco, utilizando o e-mail utilizado para cadastro. Faremos o estorno e vamos identificar o problema para que não ocorra novamente.',
  },
];

export function FaqCollapsable() {
  const [openCard, setOpenCard] = useState(0);

  const toggleCard = useCallback(
    (id) => {
      setOpenCard(id === openCard ? 0 : id);
    },
    [openCard]
  );

  return (
    <Box>
      <Text
        bg="brand.500"
        color="white"
        width="-webkit-fit-content"
        fontWeight="semibold"
        px={8}
        py={2}
        borderTopRadius={8}
        mx="auto"
      >
        Perguntas Frequentes
      </Text>
      <Flex direction="column" mx="auto" width="-webkit-fit-content" minW="80%">
        {faqCards.map((card) => (
          <Box
            border="1px solid"
            borderColor="brand.400"
            p={2}
            mt="-1px"
            key={card.id}
          >
            <Button
              mr={4}
              onClick={() => toggleCard(card.id)}
              variant="link"
              borderRadius="4px"
              fontSize="2xl"
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Text fontSize="lg" color="gray.700">
                <Box
                  as="span"
                  display="inline-block"
                  w={8}
                  bg="green.500"
                  color="white"
                  fontSize="xl"
                  borderRadius={4}
                  mr={4}
                >
                  {openCard == card.id ? '-' : '+'}
                </Box>
                {card.question}
              </Text>
            </Button>
            <Box
              height={openCard == card.id ? 'auto' : '0px'}
              overflow="hidden"
              pl={12}
              color="gray.600"
            >
              <Text>{card.answer}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
