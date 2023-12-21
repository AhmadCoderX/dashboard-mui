import { Box, Typography } from '@mui/material'
import React from 'react'
import FlareIcon from '@mui/icons-material/Flare';

const SideBarLogo = () => {
    return (
        <Box width='146px' display='flex' alignItems='center' justifyContent='center' height='fit-content' color={'#702DFF'}>
            <FlareIcon sx={{ width: '40px', height: '40px', mr: '10px'}} />
            <Typography variant='h6' fontWeight='800' >COURSUE</Typography>
        </Box>
    )
}

export default SideBarLogo