import React, { useState } from 'react';

export default function SearchForm(props) {
	const { characters, setCharacters } = props;

	const [ input, setInput ] = useState('');

	const sumbitHandler = (e) => {
		e.preventDefault();
		const filtered = characters.filter((character) => {
			return character.name.toLowerCase() === input.toLowerCase();
		});
		setCharacters(filtered);
	};

	return (
		<section className="search-form">
			<form onSubmit={(e) => sumbitHandler(e)}>
				<input onChange={(e) => setInput(e.target.value)} />
				<button>Submit</button>
			</form>
		</section>
	);
}
