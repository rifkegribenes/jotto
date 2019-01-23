import { actionTypes } from '../actions';


/**
 * @function errorReducer
 * @param  {bool} state  - True or False.
 * @param  {object} action - Object to be reduced.
 * @return {boolean}        New error state.
 */
export default (state=false, action) => {
	switch(action.type) {
		case actionTypes.SET_ERROR:
			return true;
		case actionTypes.RESET_GAME:
			return false;
		default:
			return state;
	}
}