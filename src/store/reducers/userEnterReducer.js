import { actionTypes } from '../actions';


/**
 * @function userEnterReducer
 * @param  {string} state  - 'intial', 'form', or 'play'.
 * @param  {object} action - Object to be reduced.
 * @return {boolean}        New userEnterReducer state.
 */
export default (state = 'initial', action) => {
	switch(action.type) {
		case actionTypes.DISPLAY_UE_FORM:
			return 'form';
		case actionTypes.SET_USER_SECRET_WORD:
			return 'play';
		case actionTypes.RESET_GAME:
			return 'initial';
		default:
			return state;
	}
}