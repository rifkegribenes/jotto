import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class UserEnterForm extends Component {
	/**
	 * Create ref for input box.
	 * @method  constructor
	 * @param  {object} props - Component props.
	 * @return {undefined}
	 */
	constructor(props) {
		super(props);

		this.inputBox = React.createRef();
	}

	/**
	 * Prevents default, validates input, calls setSecretWord action.
	 * @function submitForm
	 * @param  {object} e - Event.
	 * @return {null}
	 */
	submitForm = (e) => {
		e.preventDefault();
		if (this.inputBox.current.value.length > 0) {
			this.props.formAction(this.inputBox.current.value);
		}
	}

	/**
	 * Render the component.
	 * @method render
	 * @return {JSX.Component} - Rendered component.
	 */
	render() {
		return (
			<div data-test="component-user-enter-form">
				<p data-test="enter-word-instructions">
					Enter a secret word for someone else to guess!
				</p>
				<form className="form-inline">
					<input
						data-test="enter-word-input"
						className="mb-2 mr-sm-3 my-sm-3 form-control input-lg"
						ref={this.inputBox}
						id="secret-word"
						type="text"
						placeholder="enter secret word"
					/>
					<button
						data-test="submit-button"
						className="btn btn-primary mb-2 my-sm-3"
						onClick={(e) => this.submitForm(e)}
						type='submit'
					>
						Submit
					</button>
				</form>
			</div>
			)
	}
};

UserEnterForm.propTypes = {
  formAction: PropTypes.func,
}

export default UserEnterForm;