import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord, giveUpAction } from '../store/actions';

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

	/**
	 * Prevents default, validates input, calls guessWord action, clears field.
	 * @function submitGuessedWord
	 * @param  {object} e - Event.
	 * @return {null}
	 */
	submitGuessedWord = (e) => {
		e.preventDefault();
		const guessedWord = this.inputBox.current.value;
		if (guessedWord && guessedWord.length > 0) {
			this.props.guessWord(guessedWord);
		}
		this.inputBox.current.value = '';

	}

	/**
	 * Prevents default, calls giveUpAction
	 * @function handleGiveUp
	 * @param  {object} e - Event.
	 * @return {null}
	 */
	handleGiveUp = (e) => {
		e.preventDefault();
		this.props.giveUpAction();
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
						className="mb-2 mr-sm-3 my-sm-3 form-control input-lg"
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
					{!this.props.gaveUp &&
						<button
							data-test="give-up-button"
							className="btn btn-danger mx-3"
							type="button"
							onClick={this.props.giveUpAction}
						>
							Give Up
						</button>
						}
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

export default connect(mapStateToProps, { guessWord, giveUpAction })(UnconnectedInput);