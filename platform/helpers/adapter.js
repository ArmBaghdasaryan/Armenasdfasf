import { dateFormat } from "./helper";

const createLastAppsTableData = (companyName, client, application, applicationID, estimationDate, estimationDateOrg, status) => ({ companyName, client, application, applicationID, estimationDate, estimationDateOrg, status });

const adaptLastAppsTableData = (data) => {
  const dataList = [];
  data.forEach((item) => {
    dataList.push(
      createLastAppsTableData(
        item.companyName,
        item.client,
        item.application,
        item.applicationID,
        item.estimationDate ? dateFormat(item.estimationDate, 'll') : '-',
        item.estimationDate,
        item.status,
      )
    );
  });
  return dataList;
};

export { adaptLastAppsTableData };
