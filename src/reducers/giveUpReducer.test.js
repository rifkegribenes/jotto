import { actionTypes } from '../actions';
import giveUpReducer from './giveUpReducer';

test('returns default initial state of `false` when no action is passed', () => {
	const newState = giveUpReducer(undefined, {});
	expect(newState).toBe(false);
});
test('returns state of `true` upon receiving action of type `GIVE_UP`', () => {
	const newState = giveUpReducer(undefined, { type: actionTypes.GIVE_UP });
	expect(newState).toBe(true);
});
test('returns state of `false` upon receiving action of type `RESET_GAME`', () => {
	const newState = giveUpReducer(true, { type: actionTypes.GIVE_UP });
	expect(newState).toBe(false);
});