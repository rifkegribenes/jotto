import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import TotalGuesses from './TotalGuesses';
import NewWordButton from './NewWordButton';
import { getSecretWord, resetGame } from './actions';

export class UnconnectedApp extends Component {

	/**
	 * @method componentDidMount
	 * @return {undefined}
	 */
	componentDidMount() {
		// get the secret word
		this.props.getSecretWord();
	}

  render() {
    return (
      <div className="container px-4">
        <h1 className="text-center">Jotto</h1>
        <div className="mb-3">The secret word is <strong>{this.props.secretWord}</strong></div>
        <Congrats success={this.props.success ? this.props.success : false} />
        <Input />
        <NewWordButton display={this.props.success ? this.props.success : false} resetAction={this.props.resetGame} />
        <GuessedWords guessedWords={this.props.guessedWords ? this.props.guessedWords : []} />
        <TotalGuesses numberGuesses={this.props.guessedWords ? this.props.guessedWords.length : 0} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	const { success, guessedWords, secretWord } = state;
	return { success, guessedWords, secretWord };
};

const actions = { getSecretWord, resetGame };
export default connect(mapStateToProps, actions)(UnconnectedApp);
