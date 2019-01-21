import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import TotalGuesses from './TotalGuesses';

const defaultProps = { numberGuesses: 0 };

/**
 * Factory function to create a ShallowWrapper for the TotalGuesses component
 * @function setup
 * @param  {object} props - Component props specific to this setup.
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<TotalGuesses {...setupProps} />);
}

test('renders without error', () => {
	const wrapper = setup({ numberGuesses: 0 });
	const component = findByTestAttr(wrapper, 'component-total-guesses');
	expect(component.length).toBe(1);
});
test('renders no text when `totalGuesses` prop = 0', () => {
	const wrapper = setup({ numberGuesses: 0  });
	const component = findByTestAttr(wrapper, 'component-total-guesses');
	expect(component.text()).toBe('');
});
test('renders correct number of guesses when `totalGuesses` prop > 0', () => {
	const wrapper = setup({ numberGuesses: 2 });
	const message = findByTestAttr(wrapper, 'total-guesses');
	expect(message.text().length).not.toBe(0);
	expect(message.text()).toMatch(/2/);
});
test('does not throw warning with expected props', () => {
	const expectedProps = { numberGuesses: 0 };
	checkProps(TotalGuesses, expectedProps);
});