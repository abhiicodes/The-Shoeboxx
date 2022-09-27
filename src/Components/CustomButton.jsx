import React from 'react'
import { Box } from '@mui/material';
import { Button } from '@mui/material'
const CustomButton = ({text}) => {
  return (
    <Box>

<Button variant="contained">{text}</Button>

    </Box>
  )
}

export default CustomButton