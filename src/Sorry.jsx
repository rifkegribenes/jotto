import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React component for better luck next time message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} Rendered component (or null if 'gave up' prop is false)
 */


const Sorry = (props) => {
	if (props.gaveUp) {
    return (
      <div data-test="component-sorry" className="alert alert-danger mb-3">
        <span data-test="sorry-message">
          The secret word was <strong>{props.secretWord}</strong>. <br />
          Better luck next time!
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-sorry" />
    );
  }
}

Sorry.propTypes = {
	gaveUp: PropTypes.bool,
  secretWord: PropTypes.string
}

export default Sorry;