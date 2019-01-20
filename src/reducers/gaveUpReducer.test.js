import { actionTypes } from '../actions';
import gaveUpReducer from './gaveUpReducer';

test('returns default initial state of `false` when no action is passed', () => {
	const newState = gaveUpReducer(undefined, {});
	expect(newState).toBe(false);
});
test('returns state of `true` upon receiving action of type `GIVE_UP`', () => {
	const newState = gaveUpReducer(undefined, { type: actionTypes.GIVE_UP });
	expect(newState).toBe(true);
});
test('returns state of `false` upon receiving action of type `RESET_GAME`', () => {
	const newState = gaveUpReducer(undefined, { type: actionTypes.RESET_GAME });
	expect(newState).toBe(false);
});