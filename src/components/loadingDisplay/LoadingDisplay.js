import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

function LoadingDisplay() {
  return (
    <Box sx={{ width: 400 }}>
      {[...Array(6)].map((element, index) => {
        return <Skeleton sx={{ height: 40 }} key={index} />;
      })}
    </Box>
  );
}

export default LoadingDisplay;
