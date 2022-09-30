import React, { FC, useEffect, useState, useCallback, MutableRefObject, useRef, useMemo } from 'react';
import moment from 'moment';
import { Box, Drawer } from '@mui/material';
import PageTitle from './pageTitle';
import ModifyingApplications from './modifyingApplications';
import ApplicationsBlock from './rightBlock/applicationsBlock';
import MeetingsBlock from './rightBlock/meetingsBlock';
import ApplicationTable from './ApplicationTable';
import CompaniesCards from './companiesCards/CompaniesCards';
import { variables } from '../../../src/configs';

const Overview: FC = () => {

  const sidebarRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [drawerWidth, setDrawerWidth] = useState(variables.overviewRightDrawerWidth);

  // TODO get from API
  const [applications, setApplications] = useState([
    { id: '1', name: 'Application 1', price: 100, status: 'inprogress', client: 'Client 1', company: 'Company 1', requestDate: moment(new Date()).format('ll'), estimationDate: moment(new Date()).format('ll') },
    { id: '2', name: 'Application 2', price: 200, status: 'inprogress', client: 'Client 2', company: 'Company 2', requestDate: moment(new Date()).format('ll'), estimationDate: moment(new Date()).format('ll') },
    { id: '3', name: 'Application 3', price: 300, status: 'needModifying', client: 'Client 3', company: 'Company 3', requestDate: moment(new Date()).format('ll'), estimationDate: moment(new Date()).format('ll') },
    { id: '4', name: 'Application 4', price: 400, status: 'inprogress', client: 'Client 4', company: 'Company 4', requestDate: moment(new Date()).format('ll'), estimationDate: moment(new Date()).format('ll') },
  ]);

  // TODO get from API
  const [meetings, setMeetings] = useState([
    { id: '1', client: 'Client 1', company: 'Company 1', date: new Date() },
    { id: '2', client: 'Client 2', company: 'Company 2', date: new Date() },
    { id: '3', client: 'Client 3', company: 'Company 3', date: new Date() },
  ]);

  const needToModifyingApps = applications.filter(i => i.status === 'needModifying');
  const inprogressApps = applications.filter(i => i.status === 'inprogress');

  const handleRef = useCallback((el: HTMLDivElement | null) => {
    sidebarRef.current = el
  }, []);

  useEffect(() => {
    const childElement = sidebarRef?.current?.childNodes[0] as HTMLElement;
    setDrawerWidth(`${childElement.offsetWidth}px` || variables.overviewRightDrawerWidth);
  }, []);

  return (
    <Box component="div" sx={{ display: 'flex', height: '100%' }}>
      <Box sx={{ width: `calc(100% - ${drawerWidth})` }}>
        <Box sx={{ p: '32px 40px' }}>
          <PageTitle />
        </Box>
        <Box sx={{ p: '0 32px' }}>
          <CompaniesCards />
        </Box>
        <Box sx={{ p: '0 24px', mt: 5 }}>
          <ModifyingApplications applications={needToModifyingApps} />
        </Box>

        <Box sx={{ mt: 7, p: '0 32px' }}>
          <ApplicationTable />
        </Box>

      </Box>

      <Box sx={{ display: 'block' }}>
        <Drawer
          anchor='right'
          variant="permanent"
          sx={{ '& .MuiDrawer-paper': { border: 'none' } }}
          open
          ref={handleRef}
          ModalProps={{ keepMounted: true }}
        >
          <Box component="div" sx={{ p: 4, width: variables.overviewRightDrawerWidth, height: 'fit-content', background: '#F1F4FA' }}>
            <ApplicationsBlock applications={inprogressApps} />
            <MeetingsBlock meetings={meetings} />
          </Box>
        </Drawer>
      </Box>
    </Box >
  );
};

export default Overview;