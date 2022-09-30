import React, { FC, memo } from 'react';
import {TableCell, TableHead, TableRow, TableSortLabel} from '@mui/material';
import { getCellPadding, getWidth } from '../config/tableStyleHelper';
import TableConfigs from '../config/tableConfigs';

import M from '../../../../messages';
import { muiStyles } from './styles';

interface iSortObj {
  order: any;
  field: string;
}
interface iProps {
  sortObj: iSortObj,
  onRequestSort: ((e: any, property: string) => void) | null;
  rowCount: number;
  fields: any;
  filteredParams: any;
  withEditAction: boolean;
  withDeleteAction: boolean;
}

const CustomTableHead: FC<iProps> = (props) => {
  const {
    sortObj,
    onRequestSort,
    rowCount,
    fields,
    filteredParams,
    withEditAction,
    withDeleteAction,
  } = props;

  const createSortHandler = (property: string) => (event: any) => {
    if (onRequestSort) {
      onRequestSort(event, property);
    }
  };

  return (
    <TableHead>
      <TableRow sx={muiStyles.tableHeadRow}>
        {fields.map((headCell: any) => {
          const id = headCell.orderField || headCell.id;
          const { cellPaddingRight, cellPaddingLeft } =
            rowCount > 0
              ? headCell
              : {
                  cellPaddingRight: TableConfigs.defaultCellPadding,
                  cellPaddingLeft: TableConfigs.defaultCellPadding,
                };
          return (
            <TableCell
              key={id}
              sortDirection={sortObj.field === id ? sortObj.order : false}
              style={{
                ...getWidth(headCell.width),
                ...getCellPadding(cellPaddingRight, cellPaddingLeft),
              }}
              align={headCell.headAlign || 'left'}
            >
              {headCell.sortable && (
                <TableSortLabel
                  active={filteredParams?.params?.sort?.field === id}
                  direction={
                    filteredParams?.params?.sort?.field === id
                      ? filteredParams.params.sort.order
                      : 'asc'
                  }
                  onClick={createSortHandler(id)}
                >
                  {M.get(headCell.label)}
                </TableSortLabel>
              )}
              {!headCell.sortable && M.get(headCell.label)}
            </TableCell>
          );
        })}
        {withEditAction && ( <TableCell style={{ width: '24px', paddingRight: '16px', paddingLeft: '24px' }} /> )}
        {withDeleteAction && ( <TableCell style={{ width: '24px', paddingRight: '16px', paddingLeft: '24px' }} /> )}
      </TableRow>
    </TableHead>
  );
}

export default memo(CustomTableHead);
