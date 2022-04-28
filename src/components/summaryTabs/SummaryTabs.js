import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CartsSummary from '../cartsSummary/CartsSummary';
import CategorySummary from '../categorySummary/CategorySummary';
import UsersSummary from '../usersSummary/UsersSummary';
import useMediaQuery from '@mui/material/useMediaQuery';
import './summaryTabs.scss';

function SummaryTabs({ products, carts, users }) {
  const [tabNumber, setTabNumber] = useState(0);

  const smallScreen = useMediaQuery('(max-width:600px)');

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
          variant={smallScreen && 'fullWidth'}
        >
          <Tab label='Carts Summary' />
          <Tab label='Categories Summary' />
          <Tab label='Users Summary' />
        </Tabs>
      </Box>
      <TabPanel value={tabNumber} index={0} className='content'>
        <CartsSummary carts={carts} products={products} users={users} />
      </TabPanel>
      <TabPanel value={tabNumber} index={1} className='content'>
        <CategorySummary products={products} />
      </TabPanel>
      <TabPanel value={tabNumber} index={2} className='content'>
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
