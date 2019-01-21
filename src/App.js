import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import TotalGuesses from './TotalGuesses';
import NewWordButton from './NewWordButton';
import Sorry from './Sorry';
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
        <Congrats success={this.props.success} />
        <Sorry gaveUp={this.props.gaveUp} secretWord={this.props.secretWord} />
        {!this.props.gaveUp && <Input />}
        <NewWordButton display={this.props.success || this.props.gaveUp} resetAction={this.props.resetGame} />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <TotalGuesses numberGuesses={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord, gaveUp }) => {
	return { success, guessedWords, secretWord, gaveUp };
};

const actions = { getSecretWord, resetGame };
export default connect(mapStateToProps, actions)(UnconnectedApp);
