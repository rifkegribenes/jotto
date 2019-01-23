import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for error message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `error` prop is false).
 */
const Error = (props) => {
  if (props.error) {
    return (
      <div data-test="component-error" className="alert alert-danger">
        <span data-test="error-message">
          There was an error retrieving the secret word. Please try again later.
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-error" />
    );
  }
};

Error.propTypes = {
  error: PropTypes.bool,
};

export default Error;