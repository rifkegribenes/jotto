import { actionTypes } from '../actions';


/**
 * @function giveUpReducer
 * @param  {bool} state  - True or False.
 * @param  {object} action - Object to be reduced.
 * @return {boolean}        New success state.
 */
export default (state=false, action) => {
	switch(action.type) {
		case actionTypes.GIVE_UP:
			return true;
		case actionTypes.RESET_GAME:
			return false;
		default:
			return state;
	}
}