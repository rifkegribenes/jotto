import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React component for User Enter button
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} Rendered component (or null if 'display' prop is false)
 */


const UserEnterButton = (props) => {
	if (props.display) {
		return (
			<button
				data-test="component-user-enter-button"
				className="btn btn-primary mb-3 mt-5"
				onClick={props.displayUserEnterForm}
			>
				Enter your own secret word
			</button>
			);
	} else {
		return (<div data-test="component-user-enter-button" />);
	}
};

UserEnterButton.propTypes = {
	display: PropTypes.bool,
	displayUserEnterForm: PropTypes.func
}

export default UserEnterButton;