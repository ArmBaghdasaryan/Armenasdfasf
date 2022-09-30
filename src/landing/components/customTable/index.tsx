import React, { FC, useState, useMemo, memo, useCallback } from 'react';
import { Table, TableBody, TablePagination, TableRow, TableContainer, Paper, Skeleton, Box, Tooltip } from '@mui/material';
import CustomTableHead from './customTableHead';
import CustomTableCell from './customTableCell';
import M from '../../../messages';
import { muiStyles } from './styles';

interface iTableSources {
  data: any;
  count: number;
}

interface iTableOptions {
  fields: any;
  rowsPerPageOptions: any;
  searchFields: any;
}

interface iProps {
  tableSources: iTableSources;
  tableOptions: iTableOptions;
  filteredParams: any;
  setFilteredParams: (filters: any) => void;
  handleRowClick: (row: any) => void;
  loading?: boolean;
  handleEditAction?: (values: any) => void;
  handleDeleteAction?: (values: any) => void;
  rowUniqueKey?: string,
  handleClickIcon?: (row: any) => void;
  toolbarView?: React.ReactNode;
  withPagination?: boolean;
  withBorders?: boolean;
}

const CustomTable: FC<iProps> = ({
  tableSources,
  tableOptions,
  loading,
  filteredParams,
  setFilteredParams,
  handleEditAction,
  handleDeleteAction,
  rowUniqueKey = 'id',
  handleClickIcon,
  handleRowClick,
  toolbarView,
  withPagination = true,
  withBorders = false
}) => {
  const { limit, skip } = filteredParams?.params;
  const page = parseInt(skip, 10) / parseInt(limit, 10);
  const [rowsPerPage, setRowsPerPage] = useState(parseInt(limit, 10));

  const sortObj = filteredParams?.params?.sort || {};
  const { order, field: orderBy } = sortObj;

  const { fields, rowsPerPageOptions } = tableOptions;
  const { data: tableData, count } = tableSources;

  const handleRequestSort = useCallback(
    (e: any, property: string) => {
      const isAsc = orderBy === property && order === 'asc';
      const newFilter = {
        params: {
          ...filteredParams.params,
          sort: { field: property, order: isAsc ? 'desc' : 'asc' },
          skip: 0,
        },
      };
      setFilteredParams(newFilter);
    },
    [filteredParams.params, setFilteredParams, order, orderBy]
  );

  const handleChangePage = (e: any, newPage: number) => {
    const newFilter = {
      params: {
        ...filteredParams.params,
        skip: newPage * filteredParams.params.limit,
      },
    };
    setFilteredParams(newFilter);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    const newFilter = {
      params: {
        ...filteredParams.params,
        skip: 0,
        limit: parseInt(event.target.value, 10),
      },
    };
    setFilteredParams(newFilter);
  };

  const onTableRowClick = (row: any) => {
    if (handleRowClick) {
      return handleRowClick(row);
    }
  }

  const renderCustomTableCell = useMemo(() => {
    return tableData?.map((row: any) => (
      <Tooltip key={row[rowUniqueKey]} title={(typeof handleRowClick === 'function') ? M.get('actions.clickToRow') : ''}>
        <TableRow
          onClick={() => onTableRowClick(row)}
          key={row[rowUniqueKey]}
          sx={{ ...muiStyles.tableRow, ...((typeof handleRowClick === 'function') && muiStyles.clickableRow) }}
        >
          {fields.map((item: any) => (
            <CustomTableCell
              key={item.id}
              handleClickIcon={handleClickIcon}
              cellItem={item}
              data={row}
              filteredParams={filteredParams}
            />
          ))}
          {handleEditAction && (
            <CustomTableCell
              key={`${row[rowUniqueKey]}-edit`}
              handleClickIcon={handleEditAction}
              data={row}
              isEditAction
            />
          )}
          {handleDeleteAction && (
            <CustomTableCell
              key={`${row[rowUniqueKey]}-delete`}
              handleClickIcon={handleDeleteAction}
              data={row}
              isDeleteAction
            />
          )}
        </TableRow>
      </Tooltip>
    ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields, tableData, handleClickIcon, handleEditAction]);

  return (
    <Box component="div">
      <Paper sx={!withBorders ? muiStyles.paperRootNoBorder : {}}>
        <TableContainer>
          {toolbarView && toolbarView}
          {loading ? (
            <div>
              <Skeleton height="80px" width="100%" animation="pulse" />
              <Skeleton height="200px" width="100%" animation="pulse" />
            </div>
          ) : (
            <Table sx={muiStyles.table} size="small" padding="checkbox">
              <CustomTableHead
                sortObj={sortObj}
                onRequestSort={tableData?.length > 0 ? handleRequestSort : null}
                rowCount={tableData?.length}
                fields={fields}
                filteredParams={filteredParams}
                withEditAction={(!!tableData?.length && (typeof handleEditAction === 'function')) ? true : false}
                withDeleteAction={(!!tableData?.length && (typeof handleDeleteAction === 'function')) ? true : false}
              />
              <TableBody sx={loading ? muiStyles.tableBody : {}}>
                {renderCustomTableCell}
                {!tableData?.length && (
                  <TableRow style={{ height: 60 }}>
                    <CustomTableCell isEmptyCell loading={loading} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        {tableData?.length > 0 && withPagination && (
          <TablePagination
            component="div"
            rowsPerPageOptions={rowsPerPageOptions}
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </Box>
  );
}

export default memo(CustomTable);
