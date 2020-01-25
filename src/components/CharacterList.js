import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect

	const [ characters, setCharacters ] = useState([]);
	useEffect(() => {
		Axios.get('https://rickandmortyapi.com/api/character/')
			.then((res) => setCharacters(res.data.results))
			.catch((err) => console.log('Server Error', err));
	}, []);
	// console.log(characters);

	return (
		<section className="character-list">
			<h2>
				{characters.map((el) => {
					return (
						<Link key={el.id} to={`/characters/${el.id}`}>
							<CharacterCard el={el} />
						</Link>
					);
				})}
			</h2>
		</section>
	);
}
