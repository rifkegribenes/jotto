import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import NewWordButton from './NewWordButton';


const defaultProps = { display: false };

/**
 * Factory function to create a ShallowWrapper for the NewWordButton component
 * @function setup
 * @param  {object} props - Component props specific to this setup.
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<NewWordButton {...setupProps} />);
}

test('renders without error', () => {
	const wrapper = setup({ display: false });
	const component = findByTestAttr(wrapper, 'component-new-word-button');
	expect(component.length).toBe(1);
});
test('renders no text when `display` prop is false', () => {
	const wrapper = setup({ display: false });
	const component = findByTestAttr(wrapper, 'component-new-word-button');
	expect(component.text()).toBe('');
});
test('renders non-empty text when `display` prop is true', () => {
	const wrapper = setup({ display: true });
	const component = findByTestAttr(wrapper, 'component-new-word-button');
	expect(component.text().length).not.toBe(0);
});
test('does not throw warning with expected props', () => {
	const expectedProps = { success: false };
	checkProps(NewWordButton, expectedProps);
});
test('calls `resetAction` prop upon button click', () => {
  // create a mock function so we can see whether it's called on click
  const resetGameMock = jest.fn();
  const wrapper = setup({ display: true, resetAction: resetGameMock });

  // find the button (which is the top level element of this component)
  const resetButton = findByTestAttr(wrapper, 'component-new-word-button');
  resetButton.simulate('click');

  // expect the mock to have been called once
  expect(resetGameMock.mock.calls.length).toBe(1);
});
