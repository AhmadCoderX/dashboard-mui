import { Box } from '@mui/material'
import React from 'react'
import SideBarLogo from './SideBarLogo'

const LeftSideBar = () => {
  return (
    <Box width='240px' height='100vh' bgcolor='red' p='32px' display='flex' justifyContent='space-between' flexDirection='column'>
        <SideBarLogo/>
    </Box>
  )
}

export default LeftSideBar