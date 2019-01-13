import React from 'react';
import { shallow } from 'enzyme';

// import { findByTestAttr, storeFactory } from '../test/testUtils';
// import Input from './Input';
import { findByTestAttr } from '../test/testUtils';
import { UnconnectedInput } from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param  {object} initialState - Initial state for this setup.
 * @return {ShallowWrapper}
 */


// the version below worked with react-redux 5.x but not in 6.x

// const setup = (initialState={}) => {
// 	const store = storeFactory(initialState);
// 	const wrapper = shallow(<Input store={store}/>).dive();
// 	return wrapper;
// }

// workaround for react-redux 6.x (testing unconnected component)
const setup = (initialState={}) => {
  const wrapper = shallow(<UnconnectedInput {...initialState} />);
  return wrapper;
}

setup();

describe('render', () => {
	describe('word has not been guessed', () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { success: false };
			wrapper = setup(initialState);
		})
		test('renders component without error', () => {
			const component = findByTestAttr(wrapper, 'component-input');
			expect(component.length).toBe(1);
		});
		test('renders input box', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box');
			expect(inputBox.length).toBe(1);
		});
		test('renders submit button', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button');
			expect(submitButton.length).toBe(1);
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