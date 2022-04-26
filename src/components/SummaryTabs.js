import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CartsSummary from './CartsSummary';
import CategorySummary from './CategorySummary';
import UsersSummary from './UsersSummary';

function SummaryTabs({ products, carts, users }) {
  const [tabNumber, setTabNumber] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabNumber(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabNumber}
          onChange={handleTabChange}
          aria-label='basic tabs example'
          textColor='white'
          centered
        >
          <Tab label='Categories Summary' />
          <Tab label='Carts Summary' />
          <Tab label='Users Summary' />
        </Tabs>
      </Box>
      <TabPanel value={tabNumber} index={0}>
        <CategorySummary products={products} />
      </TabPanel>
      <TabPanel value={tabNumber} index={1}>
        <CartsSummary carts={carts} products={products} users={users} />
      </TabPanel>
      <TabPanel value={tabNumber} index={2}>
        <UsersSummary users={users} />
      </TabPanel>
    </Box>
  );
}

export default SummaryTabs;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
