/**
 *
 * BoilerplateExample
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function BoilerplateExample() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

BoilerplateExample.propTypes = {};

export default memo(BoilerplateExample);
