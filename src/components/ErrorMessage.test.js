import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import ErrorMessage from './ErrorMessage';


const defaultProps = { error: false };

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param  {object} props - Component props specific to this setup.
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<ErrorMessage {...setupProps} />);
}

test('renders without error', () => {
	const wrapper = setup({ error: false });
	const component = findByTestAttr(wrapper, 'component-error');
	expect(component.length).toBe(1);
});
test('renders no text when `error` prop is false', () => {
	const wrapper = setup({ error: false });
	const component = findByTestAttr(wrapper, 'component-error');
	expect(component.text()).toBe('');
});
test('renders non-empty error message when `error` prop is true', () => {
	const wrapper = setup({ error: true });
	const message = findByTestAttr(wrapper, 'error-message');
	expect(message.text().length).not.toBe(0);
});
test('does not throw warning with expected props', () => {
	const expectedProps = { error: false };
	checkProps(ErrorMessage, expectedProps);
});