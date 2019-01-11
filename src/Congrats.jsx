import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React component for congrats message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} Rendered component (or null if 'success' prop is false)
 */


const Congrats = (props) => {
	return (
		<div data-test="component-congrats" className="alert alert-success">
			<span data-test="congrats-message">
				{props.success ? "Congratulations! You guessed the word" : ""}
			</span>
		</div>
		)
}

Congrats.propTypes = {
	success: PropTypes.bool.isRequired
}

export default Congrats;