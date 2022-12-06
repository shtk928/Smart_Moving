import * as React from 'react';
import { Box } from '@mui/material';
import NavigationBar from '../organisms/NavigationBar';
import GovernmentMain from '../organisms/government/GovernmentMain';

const GovernmentPage = () => {
  return (
    <Box display='flex' minHeight='100vh' bgcolor='#f1f1f1'>
      <NavigationBar />
      <GovernmentMain />
    </Box>
  );
};

export default GovernmentPage;