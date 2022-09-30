import { en } from './messages/en.messages';
import { ru } from './messages/ru.messages';

// This is taken from Intl.getIntlMessages
const messages = {};

messages.get = (path) => {
  let current = en;
  // todo
  if (typeof window !== "undefined") {
    if (localStorage.getItem('language') === 'ru') {
      current = ru;
    }
  }
  const pathParts = path.split('.');
  let message;
  try {
    message =
      pathParts.reduce((obj, pathPart) => obj[pathPart], current) ||
      pathParts.reduce((obj, pathPart) => obj[pathPart], en);
  } catch (err) {
    message = pathParts.reduce((obj, pathPart) => obj[pathPart], en);
  } finally {
    if (message === undefined) {
      // eslint-disable-next-line no-unsafe-finally
      throw new ReferenceError(`Could not find Intl message: ${path}`);
    }
  }

  return message;
};

export default messages;
