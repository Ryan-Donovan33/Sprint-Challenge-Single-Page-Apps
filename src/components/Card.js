import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ChCard = styled.div`
	color: white;
	background-color: navy;
	width: 100%;
	margin: 2%;
`;

function Card({ charac, setCharac }) {
	const { id } = useParams();
	const [ card, setCard ] = useState({});

	useEffect(() => {
		const actualCard = charac.filter((card) => {
			return card.id == id;
		});
		setCard(actualCard[0]);
	}, []);

	console.log(card, 'card');

	if (!card) {
		return <h1>There is no character!</h1>;
	}
	return (
		<ChCard>
			<h1>Name: {card.name}</h1>
			<p>Status: {card.status}</p>
			<p>Gender: {card.gender}</p>
		</ChCard>
	);
}

export default Card;
