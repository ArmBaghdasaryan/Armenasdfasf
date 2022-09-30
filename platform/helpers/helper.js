import moment from 'moment';

const dateFormat = (date, format = "YYYY-MM-DDTHH:mm") => moment(date).format(format);

export { dateFormat };