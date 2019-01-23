import moxios from 'moxios';

import { storeFactory } from '../../../test/testUtils';
import { getSecretWord, setError } from './';

describe('getSecretWord action creator', () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});
	test('adds response word to state', () => {
		const secretWord = 'party';
		const store = storeFactory();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: secretWord
			});
		});

		return store.dispatch(getSecretWord())
			.then(() => {
				const newState = store.getState();
				expect(newState.secretWord).toBe(secretWord);
			})

	});
	describe('updates error state to `true`', () => {
		test('server status 4xx', () => {
			const store = storeFactory();

			moxios.wait(() => {
				const request = moxios.requests.mostRecent();
				request.respondWith({
					status: 404
				});
			});

			return store.dispatch(getSecretWord())
				.then(() => {
					const newState = store.getState();
					expect(newState.error).toBe(true);
				})
		});
		test('server status 5xx', () => {
			const store = storeFactory();

			moxios.wait(() => {
				const request = moxios.requests.mostRecent();
				request.respondWith({
					status: 500
				});
			});

			return store.dispatch(getSecretWord())
				.then(() => {
					const newState = store.getState();
					expect(newState.error).toBe(true);
				})
		});
	});
})