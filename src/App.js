import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import Input from './components/Input';
import TotalGuesses from './components/TotalGuesses';
import NewWordButton from './components/NewWordButton';
import Sorry from './components/Sorry';
import { getSecretWord, resetGame } from './store/actions';

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
