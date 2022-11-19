import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box component='header' p={2} bgcolor='#f1f1f1'>
      <Typography
        fontFamily='"Oleo Script", cursive'
        fontWeight='bold'
        fontSize='32px'
        width='1024px'
        m='0 auto'
      >
        Smart Moving
      </Typography>
    </Box>
  )
}

export default Header;