/**
 *
 * BoilerplateExample
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBoilerplateExample from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function BoilerplateExample() {
  useInjectReducer({ key: 'boilerplateExample', reducer });
  useInjectSaga({ key: 'boilerplateExample', saga });

  return (
    <div>
      <Helmet>
        <title>BoilerplateExample</title>
        <meta name="description" content="Description of BoilerplateExample" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

BoilerplateExample.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  boilerplateExample: makeSelectBoilerplateExample(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(BoilerplateExample);
