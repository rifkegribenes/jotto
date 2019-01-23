import { storeFactory } from '../test/testUtils';
import { guessWord, setUserSecretWord } from './store/actions';

describe('guessWord action dispatcher', () => {
	const secretWord = 'party';
	const unsuccessfulGuess = 'train';
	describe('no guessed words', () => {
		let store;
		const initialState = { secretWord };
		beforeEach(() => {
			store = storeFactory(initialState);
		});
		test('updates state correctly for unsuccessful guess', () => {
			store.dispatch(guessWord(unsuccessfulGuess));
			const newState = store.getState();
			const expectedState = {
				...initialState,
				success: false,
				gaveUp: false,
				guessedWords: [{
					guessedWord: unsuccessfulGuess,
					letterMatchCount: 3
				}],
				userEnter: null,
				error: false
			}
			expect(newState).toEqual(expectedState);
		});
		test('updates state correctly for successful guess', () => {
			store.dispatch(guessWord(secretWord));
			const newState = store.getState();
			const expectedState = {
				secretWord,
				success: true,
				gaveUp: false,
				guessedWords: [{
					guessedWord: secretWord,
					letterMatchCount: 5
				}],
				userEnter: null,
				error: false
			}
			expect(newState).toEqual(expectedState);
		});
	});
	describe('some guessed words', () => {
		const guessedWords = [ { guessedWord: 'agile', letterMatchCount: 1}];
		const initialState = { guessedWords, secretWord }
		let store;
		beforeEach(() => {
			store = storeFactory(initialState);
		});
		test('updates state correctly for unsuccessful guess', () => {
			store.dispatch(guessWord(unsuccessfulGuess));
			const newState = store.getState();
			const expectedState = {
				secretWord,
				gaveUp: false,
				success: false,
				guessedWords: [ ...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3}],
				userEnter: null,
				error: false
			}
			expect(newState).toEqual(expectedState);
		});
		test('updates state correctly for successful guess', () => {
			store.dispatch(guessWord(secretWord));
			const newState = store.getState();
			const expectedState = {
				secretWord,
				success: true,
				gaveUp: false,
				guessedWords: [ ...guessedWords, { guessedWord: secretWord, letterMatchCount: 5}],
				userEnter: null,
				error: false
			}
			expect(newState).toEqual(expectedState);
		})
	});
});

describe('setUserSecretWord action dispatcher', () => {
  // this is in the integration test section because it
  // involves the setUserSecretWord action creator and two reducers
  let store;
  let newState;

  // word the user entered
  const userSecretWord = 'lunch';

  // word we got from the server
  const initialState = { secretWord: 'party' };

  beforeEach(() => {
    store = storeFactory(initialState);
    store.dispatch(setUserSecretWord(userSecretWord));
    newState = store.getState();
  });

  test('updates `secretWord` state correctly after entered word', () => {
    expect(newState.secretWord).toBe(userSecretWord);
  });
  test('updates `userEnter` state correctly after entered word', () => {
    expect(newState.userEnter).toBe('done');
  });
});
