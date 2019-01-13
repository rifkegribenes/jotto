import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers';
/**
 * Create a testing store with imported reducers, initial state, and middleware.
 * globals: rootReducer.
 * @param  {object} initialState - Initial state for the store.
 * @function  storeFactory
 * @return {Store}              - Redux store.
 */
export const storeFactory = (initialState) => {
	return createStore(rootReducer, initialState);
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