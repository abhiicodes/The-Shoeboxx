import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const CustomLoader = () => {
  return (
    <Stack>
    <Skeleton height='80px' />
    <Skeleton height='400px' />
    <Skeleton height='100px' />
  </Stack>
  )
}

export default CustomLoader