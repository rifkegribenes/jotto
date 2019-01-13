import React from 'react';
import { shallow } from 'enzyme';

// import { storeFactory } from '../test/testUtils';
// import App from './App';

import UnconnectedApp from './App';

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
	// this test doesn't work with react-redux 6.x
	//
	// test('`getSecretWord` action creator is a function on the props', () => {
	// 	const wrapper = setup();
	// 	const getSecretWordProp = wrapper.instance().props.getsecretWord;
	// 	expect(getSecretWordProp).toBeInstanceOf(Function);
	// })
});
