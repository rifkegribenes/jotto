import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import gaveUp from './gaveUpReducer';
import userEnter from './userEnterReducer';
import error from './errorReducer';

export default combineReducers({
	userEnter,
	success,
	guessedWords,
	secretWord,
	gaveUp,
	error
});