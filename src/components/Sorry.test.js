import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import Sorry from './Sorry';


const defaultProps = { gaveUp: false, secretWord: 'train' };

/**
 * Factory function to create a ShallowWrapper for the Sorry component
 * @function setup
 * @param  {object} props - Component props specific to this setup.
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<Sorry {...setupProps} />);
}

test('renders without error', () => {
	const wrapper = setup({ gaveUp: true });
	const component = findByTestAttr(wrapper, 'component-sorry');
	expect(component.length).toBe(1);
});
test('renders no text when `gaveUp` prop is false', () => {
	const wrapper = setup({ gaveUp: false });
	const component = findByTestAttr(wrapper, 'component-sorry');
	expect(component.text()).toBe('');
});
test('renders non-empty `better luck next time` message when `gaveUp` prop is true', () => {
	const wrapper = setup({ gaveUp: true });
	const message = findByTestAttr(wrapper, 'sorry-message');
	expect(message.text().length).not.toBe(0);
});
test('renders correct secret word when `gaveUp` prop is true', () => {
	const wrapper = setup({ gaveUp: true, secretWord: 'train' });
	const message = findByTestAttr(wrapper, 'sorry-message');
	expect(message.text().includes('train')).toBe(true);
});
test('does not throw warning with expected props', () => {
	const expectedProps = { gaveUp: false, secretWord: 'train' };
	checkProps(Sorry, expectedProps);
});