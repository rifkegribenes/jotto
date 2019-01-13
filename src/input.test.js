import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param  {object} initialState - Initial state for this setup.
 * @return {ShallowWrapper}
 */


// the version below worked with react-redux 5.x but not in 6.x

// const setup = (initialState={}) => {
// 	const store = storeFactory(initialState);
// 	const wrapper = shallow(<Input store={store}/>);
// 	console.log(wrapper.debug());
// }

// workaround for react-redux 6.x
const setup = (initialState={}) => {
  const wrapper = shallow(<UnconnectedInput {...initialState} />);
  return wrapper;
}

setup();

describe('render', () => {
	describe('word has not been guessed', () => {
		test('renders component without error', () => {

		});
		test('renders input box', () => {

		});
		test('renders submit button', () => {

		});
	});
	describe('word has been guessed', () => {
		test('renders component without error', () => {

		});
		test('does not render input box', () => {

		});
		test('does not render submit button', () => {

		});
	});
});

describe('update state', () => {

});