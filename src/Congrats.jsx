import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React component for congrats message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} Rendered component (or null if 'success' prop is false)
 */


export default (props) => {
	return (
		<div data-test="component-congrats">
			<span data-test="congrats-message">
				{props.success ? "Congratulations! You guessed the word" : ""}
			</span>
		</div>
		)
}