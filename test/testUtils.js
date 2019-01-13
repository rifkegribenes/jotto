import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/reducers';
import { middlewares } from '../src/configureStore';


// storeFactory function is unused / unusable now that react-redux 6.x
// deprecates passing store directly to component
/**
 * Create a testing store with imported reducers, initial state, and middleware.
 * globals: rootReducer, middlewares
 * @param  {object} initialState - Initial state for the store.
 * @function  storeFactory
 * @return {Store}              - Redux store.
 */
export const storeFactory = (initialState) => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
	return createStoreWithMiddleware(rootReducer, initialState);
}

/**
 * Return node(s) with the given data-test attribute.
 * @param  {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(
		component.PropTypes,
		conformingProps,
		'prop',
		component.name);
	expect(propError).toBeUndefined();
}