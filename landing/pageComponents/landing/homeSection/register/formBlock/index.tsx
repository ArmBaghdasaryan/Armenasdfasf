import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InvestorForm from './InvestorForm';
import CompanyForm from './CompanyForm';
import { muiStyles } from './styles';
import M from '../../../../../../src/messages';

const FormBlock: FC = () => {
  const [value, setValue] = React.useState('investor');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={muiStyles.tabBox}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} sx={muiStyles.tabsContainer}>
            <Tab disableRipple sx={muiStyles.tabBtn} label={M.get('pages.landing.register.form.investor')} value='investor' />
            <Tab disableRipple sx={muiStyles.tabBtn} label={M.get('pages.landing.register.form.consulting')} value='company' />
          </TabList>
        </Box>
        <TabPanel sx={muiStyles.tabPanel} value='investor'><InvestorForm /></TabPanel>
        <TabPanel sx={muiStyles.tabPanel} value='company'><CompanyForm /></TabPanel>
      </TabContext>
    </Box>
  );
};

export default FormBlock;
