import React, { FC } from 'react';
import { TableCell, Typography, Box } from '@mui/material';
import { getCellPadding } from '../../../../../src/landing/components/customTable/config/tableStyleHelper';
import NeedInfoSvg from '../../../../../src/assets/icons/application/needInfo.svg';
import InprogressSvg from '../../../../../src/assets/icons/application/inprogress.svg';
import ApprovedSvg from '../../../../../src/assets/icons/application/approved.svg';

import M from '../../../../../src/messages';
import { muiStyles } from './styles';

interface iProps {
  data: any;
  cellItem: any;
  isSortedCeil: boolean;
}
const ColumnStatus: FC<iProps> = (props) => {
  const { data, cellItem: { cellPaddingRight, cellPaddingLeft, textAlign, id }, isSortedCeil } = props;
  const getIcon = () => {
    switch (data.status) {
      case 'needInfo':
        return <NeedInfoSvg />;
      case 'inprogress':
        return <InprogressSvg />;
      case 'approved':
        return <ApprovedSvg />;
      default:
        return null;
    }
  }

  return (
    <TableCell
      align={textAlign || "left"}
      sx={muiStyles.tableCellItem}
      style={getCellPadding(cellPaddingRight, cellPaddingLeft)}
      onClick={(e) => { e.stopPropagation(); }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', mr: 1 }}>{getIcon()}</Box>
        <Typography>{M.get(`pages.platform.overview.table.statuses.${data.status}`)}</Typography>
      </Box>
    </TableCell>
  )
}

export default ColumnStatus;