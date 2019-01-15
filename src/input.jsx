import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
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
	submitGuessedWord = (e) => {
		e.preventDefault();
		const guessedWord = this.inputBox.current.value;
		if (guessedWord && guessedWord.length > 0) {
			this.props.guessWord(guessedWord);
		}
		this.inputBox.current.value = '';

	}
	/**
	 * Render the component.
	 * @method render
	 * @return {JSX.Component} - Rendered component.
	 */
	render() {
		const contents = this.props.success ?
			null : (
				<form className="form-inline">
					<input
						data-test="input-box"
						className="mb-2 mx-sm-3 my-sm-3 form-control input-lg"
						ref={this.inputBox}
						id="word-guess"
						type="text"
						placeholder="enter guess"
					/>
					<button
						data-test="submit-button"
						className="btn btn-primary mb-2 my-sm-3"
						type="submit"
						onClick={this.submitGuessedWord}
					>
						Guess
					</button>
				</form>
				);

		return (
			<div data-test="component-input">
				{contents}
			</div>
			)
	}
};

const mapStateToProps = ({ success }) => {
	return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);