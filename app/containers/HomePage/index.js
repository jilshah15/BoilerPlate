/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function HomePage() {
  const handleClick = () => {
    const m = <FormattedMessage {...messages.alertMessage} />;
    alert(m.props.defaultMessage);
  };
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <div>
        <label>
          <FormattedMessage {...messages.name} />{' '}
        </label>
        <input />
      </div>
      <div>
        <button onClick={handleClick}>
          <FormattedMessage {...messages.click} />
        </button>
      </div>
    </div>
  );
}
