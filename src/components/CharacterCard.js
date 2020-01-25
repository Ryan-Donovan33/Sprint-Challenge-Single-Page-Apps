import React from 'react';

function CharacterCard(props) {
	if (!props) {
		return <h2>Loading...</h2>;
	}
	return (
		<div>
			<p>{props.id}</p>
			<p>Name: {props.name}</p>
			<p>Status: {props.status}</p>
			<p>Gender: {props.gender}</p>
		</div>
	);
}

export default CharacterCard;
