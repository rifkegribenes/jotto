import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React component for Give Up button
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} Rendered component
 */


const GiveUpButton = (props) => {
	if (props.display) {
			return (
				<button
					data-test="component-give-up-button"
					className="btn btn-danger mx-3"
					onClick={props.giveUp}
				>
					Give Up
				</button>
			)
		} else {
			return (
			<div data-test="component-give-up-button" />
			)
		}

}

GiveUpButton.propTypes = {
	display: PropTypes.bool.isRequired
}

export default GiveUpButton;