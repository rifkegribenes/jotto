import { actionTypes } from '../actions';
import userEnterReducer from './userEnterReducer';

test('returns default initial state of `initial` when no action is passed', () => {
	const newState = userEnterReducer(undefined, {});
	expect(newState).toBe('initial');
});
test('returns state of `form` upon receiving action of type `DISPLAY_UE_FORM`', () => {
	const newState = userEnterReducer(undefined, { type: actionTypes.DISPLAY_UE_FORM });
	expect(newState).toBe('form');
});
test('returns state of `play` upon receiving action of type `SET_USER_SECRET_WORD`', () => {
	const newState = userEnterReducer(undefined, { type: actionTypes.SET_USER_SECRET_WORD });
	expect(newState).toBe('play');
});
test('returns state of `initial` upon receiving action of type `RESET_GAME`', () => {
	const newState = userEnterReducer(undefined, { type: actionTypes.RESET_GAME });
	expect(newState).toBe('initial');
});