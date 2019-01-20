import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React component for New Word button
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} Rendered component (or null if 'success' prop is false)
 */


const NewWordButton = (props) => {
	if (props.display) {
			return (
				<button
					data-test="component-new-word-button"
					className="btn btn-primary mb-3"
					onClick={() => props.resetGame()}
				>
					New Word
				</button>
			)
		} else {
			return (
			<div data-test="component-new-word-button" />
			)
		}

}

NewWordButton.propTypes = {
	display: PropTypes.bool
}

export default NewWordButton;