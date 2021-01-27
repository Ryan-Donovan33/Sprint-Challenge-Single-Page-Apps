import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchForm from './SearchForm';

const RnM = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2%;
	margin: 2%;
	width: 80%;
`;

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
			<SearchForm characters={characters} setCharacters={setCharacters} />
			<RnM>
				{characters.map((el) => {
					return (
						<Link key={el.id} to={`/card/${el.id}`}>
							<CharacterCard el={el} />
						</Link>
					);
				})}
			</RnM>
		</section>
	);
}
