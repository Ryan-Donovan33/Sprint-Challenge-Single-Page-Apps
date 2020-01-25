import React from 'react';
import styled from 'styled-components';

const ChCard = styled.div`color: white;`;
function CharacterCard({ el }) {
	if (!el) {
		return <h2>Loading...</h2>;
	}
	return (
		<div>
			<p>Name: {el.name}</p>
			<p>Status: {el.status}</p>
			<p>Gender: {el.gender}</p>
		</div>
	);
}

export default CharacterCard;
