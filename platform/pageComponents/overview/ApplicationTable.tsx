import React, { FC, useState, useCallback, useMemo } from 'react';
import { Box, Button, Drawer, Typography } from '@mui/material';
import CustomTable from '../../../src/landing/components/customTable';
import { adaptLastAppsTableData } from '../../helpers/adapter';
import { tableOptions } from './configs/config';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import M from '../../../src/messages';

import { muiStyles } from './styles';
import { useRouter } from 'next/router';
import { routes } from '../../../src/configs';

const ApplicationTable: FC = () => {
  const router = useRouter();

  // TODO get from API
  const [tableData, setTableData] = useState(
    {
      data: [
        { companyName: 'Company 1', client: 'Client 1', application: 'Application 1', applicationID: 'APP ID 1', estimationDate: new Date(), status: 'needInfo' },
        { companyName: 'Company 2', client: 'Client 2', application: 'Application 2', applicationID: 'APP ID 2', estimationDate: new Date(), status: 'inprogress' },
        { companyName: 'Company 3', client: 'Client 3', application: 'Application 3', applicationID: 'APP ID 3', estimationDate: new Date(), status: 'approved' },
        { companyName: 'Company 4', client: 'Client 4', application: 'Application 4', applicationID: 'APP ID 4', estimationDate: new Date(), status: 'approved' },
      ],
      count: 4,
      params: {
        params: {
          sort: { field: "id", order: "desc" },
          filter: {},
          limit: 4,
          skip: 0,
        }
      },
    }
  );

  const { data, count, params: filteredParams } = tableData;

  const memoTableSource = useMemo(() => {
    return { data: adaptLastAppsTableData(data), count };
  }, [data, count]);

  const memoTableOptions = useMemo(() => {
    return tableOptions;
  }, []);

  const setFilteredParams = useCallback(
    (newParams: any) => {
      setTableData((prev) => ({ ...prev, params: newParams }))
    },
    []
  );

  const redirectToApplications = () => {
    router.push({ pathname: routes.next.applications.path }, undefined);
  }

  const handleOnRowClick = (row: any) => {
    router.push({ pathname: routes.next.applications.path }, undefined);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography sx={muiStyles.blockTitle}>{M.get('pages.platform.overview.lastApplications')}</Typography>
        <Button onClick={redirectToApplications} disableRipple sx={muiStyles.viewAll} variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
          {M.get('pages.platform.overview.viewAllApps')}
        </Button>
      </Box>
      <CustomTable
        tableSources={memoTableSource}
        tableOptions={memoTableOptions}
        filteredParams={filteredParams}
        setFilteredParams={setFilteredParams}
        handleRowClick={handleOnRowClick}
        withPagination={false}
        rowUniqueKey="applicationID"
      />
    </>
  );
};

export default ApplicationTable;