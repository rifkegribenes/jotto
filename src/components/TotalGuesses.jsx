import React from 'react';

const TotalGuesses = (props) => {
		return (
			<div data-test="component-total-guesses">
				{props.numberGuesses > 0 && (
					<span data-test="total-guesses">
						Total Guesses: {props.numberGuesses}
					</span>
					)
				}
			</div>
			);
	};

export default TotalGuesses;