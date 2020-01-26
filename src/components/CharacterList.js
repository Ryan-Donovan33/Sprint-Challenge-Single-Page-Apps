import React, { useEffect, useState } from 'react';
import Card from './Card';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
			<RnM>
				{/* passing el over to characterCard component using props  */}
				{characters.map((el) => {
					return (
						<Link key={el.id} to={`/characters/${el.id}`}>
							<Card el={el} />
						</Link>
					);
				})}
			</RnM>
		</section>
	);
}
