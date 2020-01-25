import React from 'react';
import styled from 'styled-components';

const ChCard = styled.div`
	color: white;
	background-color: navy;
	width: 100%;
	margin: 2%;
`;
function CharacterCard({ el }) {
	if (!el) {
		return <h2>Loading...</h2>;
	}
	return (
		<ChCard>
			<p>Name: {el.name}</p>
			<p>Status: {el.status}</p>
			<p>Gender: {el.gender}</p>
		</ChCard>
	);
}

export default CharacterCard;
