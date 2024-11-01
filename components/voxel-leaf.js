import Image from 'next/image'
import { Center } from '@chakra-ui/react'

const VoxelLeaf = () => {
  return <Center py={12}>
    <Image
      width={100} // set maximum width to 300px
      height={50} // set maximum height to 200px
      src={'/leaf-icon512x512.png'}
      alt={'leaf-icon'}
    />
  </Center>
}

export default VoxelLeaf