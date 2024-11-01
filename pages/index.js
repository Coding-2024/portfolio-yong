import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon  } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a font-end developer.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mr
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            {/*<Image*/}
            {/*  src="/images/takuya.jpg"*/}
            {/*  alt="Profile image"*/}
            {/*  width="100"*/}
            {/*  height="100"*/}
            {/*/>*/}
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          As a frontend developer, I see myself as a creative problem solver
          with a keen eye for detail. I thrive on turning complex concepts into
          intuitive, visually appealing interfaces that enhance user
          experiences. I enjoy the challenge of keeping up with the latest
          technologies and trends, constantly learning and adapting to improve
          my skills.{' '}
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Phnom Penh, Cambodia.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed the Bachelor&apos;s Chinese Program in the Graduate School
          of Duan Hua (端華學校)
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed the Khmer High School in the Graduate School of Preah
          Sisowat
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed the Bachelor&apos;s Khmer School in the Graduate School of
          National University Of Management (NUM)
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Worked at Chinese private company as Assistance Manager and IT
          support. (領導助理)
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Frontend developer at ALLWEB IT(Solution) under project call Digital
          Document Dign.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Guitar, Sport, Badminton, Gym
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Tearveng" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @tearveng
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/veng____" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @veng____
              </Button>
            </Link>
          </ListItem>
        </List>

        {/*<SimpleGrid columns={[1, 2, 2]} gap={6}>*/}
        {/*  <GridItem*/}
        {/*    href="https://www.youtube.com/devaslife"*/}
        {/*    title="Dev as Life"*/}
        {/*    thumbnail={thumbYouTube}*/}
        {/*  >*/}
        {/*    My YouTube channel (&gt;200k subs)*/}
        {/*  </GridItem>*/}
        {/*  <GridItem*/}
        {/*    href="https://www.inkdrop.app/"*/}
        {/*    title="Inkdrop"*/}
        {/*    thumbnail={thumbInkdrop}*/}
        {/*  >*/}
        {/*    A Markdown note-taking app*/}
        {/*  </GridItem>*/}
        {/*</SimpleGrid>*/}

        {/*<Heading as="h3" variant="section-title">*/}
        {/*  Newsletter*/}
        {/*</Heading>*/}
        {/*<p>*/}
        {/*  Join me on a behind-the-scenes coding journey. Weekly updates on*/}
        {/*  projects, tutorials, and videos*/}
        {/*</p>*/}

        {/*<Box align="center" my={4}>*/}
        {/*  <Button*/}
        {/*    as={NextLink}*/}
        {/*    href="https://www.devas.life/"*/}
        {/*    scroll={false}*/}
        {/*    leftIcon={<EmailIcon />}*/}
        {/*    colorScheme="teal"*/}
        {/*  >*/}
        {/*    Sign up my newsletter here*/}
        {/*  </Button>*/}
        {/*</Box>*/}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
