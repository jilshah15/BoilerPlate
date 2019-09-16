/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Welcome to boilerplate!',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name',
  },
  click: {
    id: `${scope}.click`,
    defaultMessage: 'Click Me',
  },
  alertMessage: {
    id: `${scope}.alertMessage`,
    defaultMessage: 'function is working',
  },
});
