import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import Input from './components/Input';
import TotalGuesses from './components/TotalGuesses';
import NewWordButton from './components/NewWordButton';
import Sorry from './components/Sorry';
import UserEnterButton from './components/UserEnterButton';
import UserEnterForm from './components/UserEnterForm';
import ErrorMessage from './components/ErrorMessage';
import { getSecretWord,
  resetGame,
  setUserSecretWord,
  setUserEntering } from './store/actions';

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
    let contents;
    const zeroGuessedWords = this.props.guessedWords ? this.props.guessedWords.length === 0 : true;
    if (this.props.userEnter === 'inProgress') {
      contents = (
        <UserEnterForm formAction={this.props.setUserSecretWord}/>
      );
    } else if (this.props.error) {
      contents = ( <ErrorMessage error={this.props.error} /> );
    } else {
      contents = (
        <div>
          <Congrats success={this.props.success} />
          <Sorry gaveUp={this.props.gaveUp} secretWord={this.props.secretWord} />
          <NewWordButton
            display={this.props.success || this.props.gaveUp}
            resetAction={this.props.resetGame}
          />
          <Input />
          <GuessedWords guessedWords={this.props.guessedWords} />
          <TotalGuesses numberGuesses={this.props.guessedWords} />
          <UserEnterButton
            display={zeroGuessedWords}
             buttonAction={this.props.setUserEntering}
          />
        </div>
      );
    }
    return (
      <div className="container mt-5">
        <h1>Jotto</h1>
        { contents }
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord, gaveUp, userEnter, error }) => {
	return { success, guessedWords, secretWord, gaveUp, userEnter, error };
};

const actions = {
  getSecretWord,
  resetGame,
  setUserSecretWord,
  setUserEntering,
};
export default connect(mapStateToProps, actions)(UnconnectedApp);
