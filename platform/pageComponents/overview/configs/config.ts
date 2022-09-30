import { ColumnStatus, ColumnBold } from './cellComponents';

const tableOptions = {
  fields: [
    { id: 'companyName', label: 'pages.platform.overview.table.companyName', type: 'customComponent', component: ColumnBold, sortable: false, width: '18%', cellPaddingRight: '24px', cellPaddingLeft: '8px' },
    { id: 'client', label: 'pages.platform.overview.table.client', type: 'text', sortable: false, width: '15%', cellPaddingRight: '8px', cellPaddingLeft: '8px' },
    { id: 'application', label: 'pages.platform.overview.table.application', type: 'text', sortable: false, width: '17%', cellPaddingRight: '8px', cellPaddingLeft: '8px' },
    { id: 'applicationID', label: 'pages.platform.overview.table.applicationID', type: 'text', sortable: false, width: '15%', cellPaddingRight: '8px', cellPaddingLeft: '8px' },
    { id: 'estimationDate', label: 'pages.platform.overview.table.estimationDate', type: 'text', sortable: false, width: '15%', cellPaddingRight: '8px', cellPaddingLeft: '8px' },
    { id: 'status', label: 'pages.platform.overview.table.status', type: 'customComponent', component: ColumnStatus, sortable: false, width: '19%', cellPaddingRight: '8px', cellPaddingLeft: '24px' },
  ],
  rowsPerPageOptions: [4, 10, 25, 50, 100],
  searchFields: []
};

export { tableOptions };