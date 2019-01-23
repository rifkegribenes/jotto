import { actionTypes } from '../actions';
import errorReducer from './errorReducer';

test('returns default initial state of `false` when no action is passed', () => {
	const newState = errorReducer(undefined, {});
	expect(newState).toBe(false);
});
test('returns state of `true` upon receiving action of type `SET_ERROR`', () => {
	const newState = errorReducer(undefined, { type: actionTypes.SET_ERROR });
	expect(newState).toBe(true);
});
test('returns state of `false` upon receiving action of type `RESET_GAME`', () => {
	const newState = errorReducer(undefined, { type: actionTypes.RESET_GAME });
	expect(newState).toBe(false);
});