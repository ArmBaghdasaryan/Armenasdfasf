import React, { FC, memo } from 'react';
import { Tooltip, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { getCellPadding } from '../config/tableStyleHelper';
import TableConfigs from '../config/tableConfigs';

import M from '../../../../messages';
import { muiStyles } from './styles';

interface iProps {
  cellItem?: any;
  data?: any;
  isEditAction?: boolean;
  isDeleteAction?: boolean;
  isEmptyCell?: boolean;
  loading?: boolean;
  handleClickIcon?: (values: any) => void,
  filteredParams?: any;
}

const CustomTableCell: FC<iProps> = ({
  isEditAction,
  isDeleteAction,
  isEmptyCell,
  cellItem,
  data,
  loading,
  handleClickIcon,
  filteredParams,
}) => {

  const onActionIconClick = (e: any, values: any) => {
    e.stopPropagation();
    handleClickIcon(values);
  };

  const isSortedField = () => filteredParams.params?.sort?.field === cellItem.id || (cellItem.orderField && filteredParams.params?.sort?.field === cellItem.orderField);

  const cellView = () => {
    if (isEmptyCell) {
      return (
        <TableCell
          style={getCellPadding(
            TableConfigs.defaultCellPadding,
            TableConfigs.defaultCellPadding
          )}
          colSpan={20}
        >
          {!loading && M.get('table.noResult')}
        </TableCell>
      );
    }
    if (isEditAction) {
      return (
        <TableCell
          align="left"
          onClick={(e) => onActionIconClick(e, data)}
          sx={muiStyles.tableCellAction}
        >
          <Tooltip title={M.get('actions.edit')}>
            <EditIcon color="primary" />
          </Tooltip>
        </TableCell>
      );
    }

    if (isDeleteAction) {
      return (
        <TableCell
          align="left"
          onClick={(e) => onActionIconClick(e, data)}
          sx={muiStyles.tableCellAction}
        >
          <Tooltip title={M.get('actions.delete')}>
            <HighlightOffIcon color="error" />
          </Tooltip>
        </TableCell>
      );
    }
    if (cellItem.type === 'customComponent') {
      return cellItem.component({ data, cellItem, isSortedCeil: isSortedField(), onActionIconClick });
    }

    return (
      <TableCell
        sx={muiStyles.tableCellItem}
        style={getCellPadding(
          cellItem.cellPaddingRight,
          cellItem.cellPaddingLeft
        )}
        align={cellItem.textAlign || 'left'}
      >
        {data[cellItem.id]}
      </TableCell>
    );
  };
  return <>{cellView()}</>;
}

export default memo(CustomTableCell);
