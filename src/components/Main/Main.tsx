import { Box, Image, Text } from '@chakra-ui/react'

export const Main = () => (
  <Box
    bgColor="#06092b"
    width="100vw"
    height="100vh"
    p="3rem"
    display="flex"
    flexDir="column"
    textAlign="center"
    alignItems="center"
    justifyContent="center"
  >
    <Image
      w="25rem"
      mb="2rem"
      src="/img/logo.svg"
      alt="Imagem de um átomo - React Avançado"
    />
    <Text fontSize="2.5rem">React Avançado</Text>
    <Text fontSize="2rem">TypeScript, ReactJS, NextJS e Styled Components</Text>
    <Image
      width="min(30rem, 100%)"
      mt="3rem"
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </Box>
)
