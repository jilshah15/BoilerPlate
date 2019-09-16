/*
 * BoilerplateExample Messages
 *
 * This contains all the text for the BoilerplateExample component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.BoilerplateExample';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the BoilerplateExample component!',
  },
});
