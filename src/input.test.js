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
		let wrapper;
		beforeEach(() => {
			const initialState = { success: true };
			wrapper = setup(initialState);
		})
		test('renders component without error', () => {
			const component = findByTestAttr(wrapper, 'component-input');
			expect(component.length).toBe(1);
		});
		test('does not render input box', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box');
			expect(inputBox.length).toBe(0);
		});
		test('does not render submit button', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button');
			expect(submitButton.length).toBe(0);
		});
	});
});

describe('redux props', () => {
	test('has success piece of state as prop', () => {
		const success = true;
		const wrapper = setup({ success });
		const successProp = wrapper.instance().props.success;
		expect(successProp).toBe(success);
	});
	// this test doesn't work with react-redux 6.x
	//
	// test('`guessWord` action creator is a function prop', () => {
	// 	const wrapper = setup();
	// 	const guessWordProp = wrapper.instance().props.guessWord;
	// 	expect(guessWordProp).toBeInstanceOf(Function);
	// });
});

describe('`guessWord action creater call', () => {
	test('`guessWord` called on submit button click', () => {
		const guessWordMock = jest.fn();

		const props = {
			guessWord: guessWordMock,
		};

		const wrapper = shallow(<UnconnectedInput { ...props } />);
		const submitButton = findByTestAttr(wrapper, 'submit-button');
		submitButton.simulate('click');

		const guessWordCallCount = guessWordMock.mock.calls.length;

		expect(guessWordCallCount).toBe(1);
	});
});
