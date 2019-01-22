import React from 'react';
import { shallow } from 'enzyme';

// import { storeFactory } from '../test/testUtils';
// import App from './App';

import App, { UnconnectedApp } from './App';

/**
 * @function setup
 * @param  {Object} state - State for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (state={}) => {
  const wrapper = shallow(<UnconnectedApp {...state} />);
  return wrapper;
}

describe('redux properties', () => {
	test('has access to `success` state', () => {
		const success = true;
		const wrapper = setup({ success });
		const successProp = wrapper.instance().props.success;
		expect(successProp).toBe(success);
	});
	test('has access to `secretWord` state', () => {
		const secretWord = 'party';
		const wrapper = setup({ secretWord });
		const secretWordProp = wrapper.instance().props.secretWord;
		expect(secretWordProp).toBe(secretWord);
	});
	test('has access to `guessedWords` state', () => {
		const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
		const wrapper = setup({ guessedWords });
		const guessedWordsProp = wrapper.instance().props.guessedWords;
		expect(guessedWordsProp).toEqual(guessedWords);
	});
	test('has access to `gaveUp` state', () => {
		const gaveUp = false;
		const wrapper = setup({ gaveUp });
		const gaveUpProp = wrapper.instance().props.gaveUp;
		expect(gaveUpProp).toEqual(gaveUp);
	});
	test('has access to `userEnter` state', () => {
		const userEnter = 'initial';
		const wrapper = setup({ userEnter });
		const userEnterProp = wrapper.instance().props.userEnter;
		expect(userEnterProp).toEqual(userEnter);
	});
	// this test doesn't work with react-redux 6.x
	//
	// test('`getSecretWord` action creator is a function on the props', () => {
	// 	const wrapper = setup();
	// 	const getSecretWordProp = wrapper.instance().props.getsecretWord;
	// 	expect(getSecretWordProp).toBeInstanceOf(Function);
	// })
});

test('`getSecretWord` runs on App mount', () => {
	const getSecretWordMock = jest.fn();

	const props = {
		getSecretWord: getSecretWordMock,
		success: false,
		guessedWords: [],
	};

	// set up App component with getSecretWordMock as the getSecretWord prop.
	const wrapper = shallow(<UnconnectedApp { ...props } />);

	// run lifecycle method
	wrapper.instance().componentDidMount();

	// check to see if mock ran
	const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

	expect(getSecretWordCallCount).toBe(1);


});

