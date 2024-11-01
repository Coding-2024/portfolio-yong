import Layout from '../../components/layouts/article'
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

const drawingArr = [
  {
    id: '',
    title: '以爱为营',
    url: 'https://instagram.fpnh10-1.fna.fbcdn.net/v/t51.29350-15/399856282_905364717607988_6422908834382104446_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0MjUuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fpnh10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=wwdyi6MfXZsQ7kNvgGneLrz&_nc_gid=a4a9953055d247c8a04ba060b49afce7&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzIzMjgyMzMwNzcyODAzNzQ4OA%3D%3D.3-ccb7-5&oh=00_AYDHuLqBMH9yc2X2XlQhCz2zA3D3L5j8y6DET8XKgRS6OA&oe=66EF09E5&_nc_sid=7a9f4b',
    description: '#王鹤棣 #白鹿 #couldbeus 😕'
  },
  {
    id: '',
    title: '我的人间烟火',
    url: 'https://instagram.fpnh10-1.fna.fbcdn.net/v/t51.29350-15/372649032_685768900276507_7666372833084694754_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE1NDUuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fpnh10-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=BbClrQbfmIAQ7kNvgFGHENm&_nc_gid=a4a9953055d247c8a04ba060b49afce7&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzE4MjM2MDMwNTkwMDgzMTI1NQ%3D%3D.3-ccb7-5&oh=00_AYATZKfGeb1fu8eZHEydfWV2Ny4S0_vJ3d2HX0HdJi04FA&oe=66EF16CE&_nc_sid=7a9f4b',
    description: '#我的人间烟火 #宋焰 #許沁'
  },
  {
    id: '',
    title: 'Love',
    url: 'https://instagram.fpnh10-1.fna.fbcdn.net/v/t51.29350-15/342228612_6480720728607357_4772040654331556234_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk4Ni5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fpnh10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=PiO_vx1IeQUQ7kNvgF3y6oK&_nc_gid=a4a9953055d247c8a04ba060b49afce7&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzA4NjQ1MjY5MjcyMTY2NzQ0NQ%3D%3D.3-ccb7-5&oh=00_AYBG92zQt6rAA9r8Uat2UvY-6_-p2x0eKPUz1B-TTd8YEA&oe=66EF2A08&_nc_sid=7a9f4b',
    description: '#ชอบตัวเองตอนอยู่กับเธอ ❤️'
  }
]

const Drawing = () => (
  <Layout title="Wallpaper Packs">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
       Drawing
      </Heading>

      <Box my={4}>
        In every line drawn, a soul whispers its truth. To draw a human is to
        capture the silent poetry of existence.
      </Box>

      <Section>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {drawingArr.map(item => (
            <WorkGridItem
              key={item.key}
              category="wallpapers"
              id="machiya"
              title={item.title}
              thumbnail={
                item.url
              }
            >
              {item.description}
            </WorkGridItem>
          ))}

        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Drawing
export { getServerSideProps } from '../../components/chakra'
