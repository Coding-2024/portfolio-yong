import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Certigna <Badge>2022-</Badge>
      </Title>
      <P>
        Discover our platforms dedicated to the verification of identity, the fight against fraud and electronic signature.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://certigna.io/">
            https://certigna.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Java, React JS, Postgres, Redis, Redux, Material UI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/certigna/certigna_02.png" alt="Certigna" />
      <WorkImage src="/images/works/certigna/certigna_03.png" alt="Certigna" />
      <WorkImage src="/images/works/certigna/certigna_04.png" alt="Certigna" />
      <WorkImage src="/images/works/certigna/certigna_05.png" alt="Certigna" />
      <WorkImage src="/images/works/certigna/certigna_06.png" alt="Certigna" />
      <WorkImage src="/images/works/certigna/certigna_06.png" alt="Certigna" />
      <WorkImage src="/images/works/certigna/certigna_07.png" alt="Certigna" />
      <WorkImage src="/images/works/certigna/certigna_08.png" alt="Certigna" />
      <WorkImage src="/images/works/certigna/certigna_09.png" alt="Certigna" />
      <WorkImage src="/images/works/certigna/certigna_10.png" alt="Certigna" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
